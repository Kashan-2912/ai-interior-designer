"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Confetti from "react-confetti"
import { Button } from "../../../../components/ui/button"
import { useWindowSize } from "react-use"

export default function PaymentSuccess() {
  const router = useRouter()
  const { width, height } = useWindowSize()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleNavigate = () => {
    setIsLoading(true)
    router.push("/dashboard")
  }

  return (
    <div className="flex items-center justify-center">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={150}
        gravity={0.15}
        colors={["#22c55e", "#4ade80", "#86efac", "#bbf7d0"]}
        recycle={false}
      />

      <div className="animate-in fade-in zoom-in duration-500 w-full max-w-md">
        <div className="relative overflow-hidden rounded-lg border bg-card p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            {/* Success Icon */}
            <div className="animate-in zoom-in spin-in-180 duration-500 delay-150 rounded-full bg-primary/10 p-3">
              <svg
                className="h-12 w-12 text-primary"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="animate-in fade-in slide-in-from-bottom duration-500 delay-200 text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Payment Successful!
            </h2>

            {/* Message */}
            <p className="animate-in fade-in slide-in-from-bottom duration-500 delay-300 text-center text-muted-foreground">
              Your credits have been added to your account.
              <br />
              Thank you for your purchase!
            </p>

            {/* Button */}
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-500 pt-4">
              <Button size="lg" className="min-w-[140px] relative" onClick={handleNavigate} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Go to Dashboard"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

