import { Environment, Paddle } from "@paddle/paddle-node-sdk";
import { NextResponse } from "next/server";

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.sandbox,
});

export async function GET(Request){
    const txn = await paddle.transactions.create({
        items: [
            {
                quantity: 1,
                price: {
                    name: "Dynamic generated price",
                    description: "Dynamic generated description",
                    unitPrice: {
                        currencyCode: "USD",
                        amount: "3000"
                    },
                    product: {
                        name: "Dynamic generated price",
                        description: "Dynamic generated description",
                        taxCategory: "saas",
                    }
                }
            }
        ]
    });

    console.log(txn);

    return NextResponse.json({txn: txn.id});
}