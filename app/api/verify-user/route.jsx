import { NextResponse } from "next/server"
import { db } from "../../../config/db";
import {eq} from "drizzle-orm"
import { Users } from "../../../config/schema"

export async function POST (req) {
    const requestData = await req.json();
    const user = requestData?.user;

    try {
        //if user already exists
        const userInfo = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))

        // console.log("Name: ", user.fullName)
        // console.log("Email: ", user?.primaryEmailAddress?.emailAddress)
        // console.log("Image: ", user.imageUrl)

        //if not, we add new user to DB
        if(userInfo?.length === 0) {
            const SaveResult = await db.insert(Users).values({
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                imageUrl: user?.imageUrl,
            }).returning({Users});

            return NextResponse.json({'result': SaveResult[0]})
        }

        return NextResponse.json({'result': userInfo[0]})

    } catch (e) {
        return NextResponse.json({error: e})
    }
}