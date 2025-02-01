import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-outfit">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="AI Room Design" width={32} height={32} className="rounded" />
          <span className="font-semibold text-[#1D2939]">AI Room Design</span>
        </Link>

        <Link href="/dashboard/buy-credits" className="text-primary hover:text-primary/90 text-sm">
          Buy More Credits
        </Link>
        <Link href="/dashboard" className="bg-primary text-white px-4 py-1.5 rounded-lg hover:bg-primary/90 text-sm">
          -Dashboard-
        </Link>
      </header>

      <main className="flex-1 flex flex-col">
        <div
          className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 
          before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] 
          before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] 
          before:transform before:-translate-x-1/2"
        >
          {/* Membership Banner */}
          <div className="flex justify-center mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 
                text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300"
            >
              2 CREDITS Free to Use
              <span className="py-1 px-2.5 inline-flex items-center gap-1 rounded-full bg-gray-100">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D2939] mb-6">
              AI Room and Home
              <div className="leading-tight">
                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent block">
                  Interior Design
                </span>
              </div>
            </h1>


            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Transform Your Space with AI: Effortless Room & Home Interior Design at Your Fingertips!
            </p>

            <Link
              href="/dashboard/create-new"
              className="inline-flex justify-center items-center gap-x-3 text-center 
              bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 
              border border-transparent text-white text-sm font-medium rounded-md 
              focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 
              dark:focus:ring-offset-gray-800"
            >
              Get started
              <ArrowRight className="flex-shrink-0 w-5 h-5" />
            </Link>


            {/* Transformation Showcase */}
            <div className="mt-16 flex justify-center items-center gap-4 px-4">
              <Image
                src="/simple.jpg"
                alt="Before: Empty room"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image src={'/race.gif'} alt="arrow" width={60} height={60} />
              <Image
                src="/ai.png"
                alt="After: Beautifully designed room"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

