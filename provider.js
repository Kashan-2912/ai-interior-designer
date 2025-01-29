"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {UserDetailContext} from './app/_context/userDetailContext';

function Provider({children}) {

  const {user} = useUser();
  const [userDetail, setUserDetail] = useState([]);

  // whenever user is available we verify user...
  useEffect(() => {
    user && verifyUser()
  }, [user])

  const verifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {user: user})
    setUserDetail(dataResult.data.result)
  }

  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider