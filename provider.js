"use client"

import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserDetailContext } from './app/_context/userDetailContext';
import { ThemeProvider as NextThemesProvider } from "next-themes";

function Provider({ children }) {

  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Verify user
  useEffect(() => {
    user && verifyUser();
  }, [user]);

  const verifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", { user });
    console.log(dataResult.data)
    setUserDetail(dataResult.data.result);
  };

  // Prevent rendering until theme is loaded
  if (!mounted) return null;

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <div>{children}</div>
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}

export default Provider;
