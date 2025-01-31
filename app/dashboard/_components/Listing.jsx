"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "components/ui/button";
import React, { useState } from "react";
import EmptyState from "./EmptyState";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Button>+ Redesign Room</Button>
      </div>

      {userRoomList?.length == 0 ? 
        <EmptyState /> 
            : 
        <div>{/* Listing */}</div>
      }
    </div>
  );
}

export default Listing;
