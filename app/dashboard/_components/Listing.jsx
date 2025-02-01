"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "components/ui/button";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { AiGeneratedImage } from "../../../config/schema";
import { db } from "../../../config/db";
import { eq } from "drizzle-orm";
import RoomDesignCard from "./RoomDesignCard";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  useEffect(() => {
    user && getUserRoomList();
  }, [user]);

  const getUserRoomList = async () => {
    const result = await db
      .select()
      .from(AiGeneratedImage)
      .where(
        eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress)
      );
    setUserRoomList(result);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Link href={"/dashboard/create-new"}>
          <Button>+ Create New</Button>
        </Link>
      </div>

      {userRoomList?.length == 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-10">
          <h2 className="font-medium text-primary text-xl mb-10">AI Room Studio</h2>
          {/* Listing */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-44">
            {userRoomList.map((room, index) => (
              <RoomDesignCard key={index} room={room} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listing;
