"use client";

import { initializePaddle } from "@paddle/paddle-js";
import { UserDetailContext } from "app/_context/userDetailContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { db } from "../../../../config/db";
import { Users } from "../../../../config/schema";
import {eq} from "drizzle-orm"
import { useUser } from '@clerk/nextjs'

function DynamicPayments({ selectedOption }) {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [paddle, setPaddle] = useState(null);

    const {user} = useUser();

    useEffect(() => {
        const updateUserCredits = async (credits) => {
            console.log("Updating user credits...");
            try {
                const newCredits = (userDetail?.credits || 0) + credits;
                const result = await db
                .update(Users)
                .set({
                    credits: newCredits,
                })
                .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
                .returning({ id: Users.id });

                if (result.length > 0) {
                    setUserDetail((prev) => ({
                        ...prev,
                        credits: newCredits,
                    }));
                    console.log("Updated credits successfully:", newCredits);
                } else {
                    console.error("Failed to update credits");
                }
            } catch (error) {
                console.error("Error updating user credits:", error);
            }
        };

        initializePaddle({
            environment: "sandbox",
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
            eventCallback: async (data) => {
                console.log("Paddle event:", data);

                if (data.name === "checkout.completed") {
                    console.log("Payment successful:", data);
                    await updateUserCredits(selectedOption?.credits);
                }
            },
        }).then((paddleInstance) => {
            setPaddle(paddleInstance);
        });
    }, [selectedOption?.credits, userDetail?.credits, setUserDetail]);

    const handleCheckout = async () => {
        if (!paddle) {
            alert("Paddle is not initialized");
            return;
        }

        if (!selectedOption) {
            alert("Please select a credit plan");
            return;
        }

        try {
            const response = await axios.post("/api/payment", {
                amount: selectedOption?.amount,
                credits: selectedOption?.credits,
            });

            const data = response.data;

            paddle.Checkout.open({
                transactionId: data.txn,
                settings: {
                    theme: "dark",
                    successUrl: "http://localhost:3000/dashboard/buy-credits/success",
                },
            });
        } catch (error) {
            console.error("Error fetching payment:", error);
            alert("Failed to initiate checkout");
        }
    };

    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleCheckout}
        >
            Checkout
        </button>
    );
}

export default DynamicPayments;
