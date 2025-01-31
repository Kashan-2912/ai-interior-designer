import Image from 'next/image'
import React from 'react'
import { Button } from 'components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='flex items-center justify-center flex-col mt-10'>
        <Image src="/placeholder.png" alt="empty" width={200} height={200} />
        <h2 className='font-medium text-lg text-gray-500'>Create New AI Interior Design for your room</h2>
        <Link href={"/dashboard/create-new"}>
          <Button className='mt-5'>
            + Redesign Room
          </Button>
        </Link>
    </div>
  )
}

export default EmptyState