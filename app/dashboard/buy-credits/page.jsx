"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import DynamicPayments from "./_components/dynamic-payments";

function BuyCredits() {
  const creditOptions = [
    { credits: 5, amount: 0.99 },
    { credits: 10, amount: 1.99 },
    { credits: 25, amount: 3.99 },
    { credits: 50, amount: 6.99 },
    { credits: 100, amount: 9.99 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="neon-effect mb-10 bg-white dark:bg-black rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto p-10 bg-white dark:bg-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">Buy More Credits</h2>
        <p className="text-gray-600 text-center mb-6">
          Unlock endless possibilities – Buy more credits and transform your room into a masterpiece.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {creditOptions.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 border-2 rounded-lg cursor-pointer transition duration-300 shadow-md 
                ${
                  selectedOption?.credits === item.credits
                    ? "border-primary bg-primary/10 scale-105"
                    : "border-gray-300 hover:border-primary/50 hover:scale-105"
                }`}
              onClick={() => setSelectedOption(item)}
            >
              <h2 className="font-bold text-4xl text-primary">{item.credits}</h2>
              <h2 className="text-lg text-gray-700">Credits</h2>

              <Button 
                className="w-full mt-3"
                onClick={() => setSelectedOption(item)}
              >
                {selectedOption?.credits === item.credits ? "Selected" : "Select"}
              </Button>

              <h2 className="font-medium text-primary mt-2 text-xl">${item.amount}</h2>

              <DynamicPayments selectedOption={selectedOption} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyCredits;
