"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import axios from 'axios';

function Provider({children}) {

  const {user} = useUser();

  // whenever user is available we verify user...
  useEffect(() => {
    user && verifyUser()
  }, [user])

  const verifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {user: user})

    console.log(dataResult.data)
  }

  return (
    <div>{children}</div>
  )
}

export default Provider