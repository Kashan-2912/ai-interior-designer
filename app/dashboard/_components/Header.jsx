"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { UserDetailContext } from "../../_context/userDetailContext";
import { Button } from "components/ui/button";
import Link from "next/link";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div>
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg text-gray-800 dark:text-white">
            VizioRoom
          </h2>
        </Link>
      </div>

      <Link href="/dashboard/buy-credits" className="flex gap-2 items-center">
        <Button
          variant="ghost"
          className="rounded-full text-primary"
        >
          Buy More Credits
        </Button>
      </Link>

      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 p-1 items-center bg-slate-200 dark:bg-gray-700 px-3 rounded-full">
            <Image src="/star.png" alt="avatar" width={20} height={20} />
            <h2 className="text-gray-800 dark:text-white">
              {userDetail?.credits}
            </h2>
          </div>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 px-3 py-1 transition-all duration-300"
          >
            {theme === "light" ? (
              <Moon size={25} className="text-gray-800" />
            ) : (
              <Sun size={25} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* User Button */}
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
