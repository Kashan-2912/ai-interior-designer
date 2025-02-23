"use client"

import { initializePaddle } from "@paddle/paddle-js"
import { useEffect, useState } from "react"

function Payments() {

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
    

    const handleCheckout = () => {
        if(!paddle) return alert("Paddle is not initialized");

        paddle.Checkout.open({
            items: [
                {
                    priceId: "pri_01jms3hkz67h13hr3ep54v8e6j",
                    quantity: 1
                }
            ],
            settings: {
                displayMode: "overlay",
                theme: "dark",
                successUrl: 'http://localhost:3000/dashboard/buy-credits/success',
            }
        })
    }

  return (
    <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleCheckout}>
            Proceed to Checkout
    </button>
  )
}

export default Payments