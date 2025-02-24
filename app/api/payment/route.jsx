import { Environment, Paddle } from "@paddle/paddle-node-sdk";
import { NextResponse } from "next/server";

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.sandbox,
});

export async function POST(req) {  // <-- Change GET to POST
    try {
        const { amount, credits } = await req.json(); // <-- Get dynamic values

        if (!amount || !credits) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const txn = await paddle.transactions.create({
            items: [
                {
                    quantity: 1,
                    price: {
                        name: `${credits} Credits Plan`,
                        description: `Buy ${credits} credits for $${amount}`,
                        unitPrice: {
                            currencyCode: "USD",
                            amount: (amount * 100).toString(), // Convert to cents
                        },
                        product: {
                            name: `${credits} Credits Plan`,
                            description: `Buy ${credits} credits for $${amount}`,
                            taxCategory: "saas",
                        }
                    }
                }
            ]
        });

        console.log("Paddle Transaction Created:", txn);

        return NextResponse.json({ txn: txn.id });
    } catch (error) {
        console.error("Error creating transaction:", error);
        return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 });
    }
}
