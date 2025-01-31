"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import { UserDetailContext } from '../../_context/userDetailContext'
import { Button } from 'components/ui/button'

function Header() {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);

  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h2 className='font-bold text-lg'>Ai Room Design</h2>
        </div>

        <Button variant="ghost" className='rounded-full text-primary'>
            Buy More Credits
        </Button>

        <div className='flex gap-7 items-center'>
            <div className='flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full'>
                <Image src="/star.png" alt="avatar" width={20} height={20} />
                <h2>{userDetail?.credits}</h2>
            </div>
            <UserButton />
        </div>
    </div>
  )
}

export default Header