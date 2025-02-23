"use client"

import { initializePaddle } from "@paddle/paddle-js"
import axios from "axios";
import { useEffect, useState } from "react"

function DynamicPayments() {

    const [paddle, setPaddle] = useState()

    useEffect(() => {
        initializePaddle({
            environment: "sandbox",
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        }).then((paddle) => {
            // console.log("Paddle Initialized:", paddle);
            setPaddle(paddle);
        });
    }, []);
    

    const handleCheckout = async () => {
        if (!paddle) return alert("Paddle is not initialized");
    
        try {
            const response = await axios.get("/api/payment");
    
            const data = response.data;
    
            console.log(data);
    
            paddle.Checkout.open({
                transactionId: data.txn,
                settings: {
                    theme: "dark",
                    successUrl: "http://localhost:3000/dashboard/buy-credits/success",
                }
            });
        } catch (error) {
            console.error("Error fetching payment:", error);
            alert("Failed to initiate checkout");
        }
    };

  return (
    <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleCheckout}>
            Proceed to Checkout
    </button>
  )
}

export default DynamicPayments