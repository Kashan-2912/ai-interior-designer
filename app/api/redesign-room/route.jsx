import axios from "axios";
import {storage, ID} from '../../../config/appwriteConfig'
import { NextResponse } from "next/server";
import Replicate from "replicate"; 
import { db } from "../../../config/db";
import { AiGeneratedImage } from "../../../config/schema";
import { useUser } from "@clerk/nextjs";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST (req) {
    
    // const {user} = useUser();
    const {imageUrl, roomType, designType, additionalRequirement} = await req.json();

    try {

        // Convert Image to AI Image
        const input = {
            image: imageUrl,
            prompt: 'A ' + roomType + ' with a ' + designType + ' style interior ' + additionalRequirement,
        };
        
        // const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        // console.log("Redesigned:", output);

        // return NextResponse.json({'result': output});

        const output = 'https://replicate.delivery/xezq/ufXQMkIFCmUubCT578sDYsY06rRIPyRBKKfm1fq0Z47f4krQB/out.png'

        // Convert Output URL to BASE64 Image
        const base64ImageUrl = await convertImageToBase64(output);

        // Uplaod Base64 to appwrite
        try {    
            // Convert Base64 to Blob
            const byteCharacters = atob(base64ImageUrl.split(",")[1]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/png" });
    
            const file = new File([blob], `image_${Date.now()}.png`, { type: "image/png" });
    
            const response = await storage.createFile(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            );
    
            const downloadUrl = storage.getFilePreview(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                response.$id
            );
    
            console.log("Redesigned File uploaded successfully to AppWrite", downloadUrl);
            

        } catch (error) {
            console.error("Error uploading image to Appwrite:", error);
            // return null;
        }


        

        // const saveImage = await axios.post("/api/save-image", { image: base64ImageUrl });

        // Save all to Database
        const dbResult = await db.insert(AiGeneratedImage).values({
            roomType: roomType,
            designType: designType,
            originalImageUrl: imageUrl,
            aiImage: downloadUrl,
            userEmail: '',
        }).returning({id: AiGeneratedImage.id});

        console.log(dbResult)

        return NextResponse.json({'result': dbResult});

    } catch (e) {
        return NextResponse.json({error: e})
    }

    // return NextResponse.json({'result': 'success'})
}

async function convertImageToBase64(imageUrl) {
    const res = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64ImageRaw = Buffer.from(res.data, 'binary').toString('base64');
    return "data:image/png;base64," + base64ImageRaw;
    
}