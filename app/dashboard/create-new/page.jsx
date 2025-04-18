"use client"
import React, { useContext, useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalRequirement from './_components/AdditionalRequirement'
import { Button } from 'components/ui/button'
import axios from 'axios'
import {storage, ID} from '../../../config/appwriteConfig'
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_components/CustomLoading'
import AiOutputDialog from '../_components/AiOutputDialog'
import {db} from "../../../config/db";
import { Users } from '../../../config/schema'
import { UserDetailContext } from '../../_context/userDetailContext'
import {eq} from "drizzle-orm"
// import { useRouter } from 'next/navigation';

function CreateNew() {

    // const router = useRouter();

    const {user} = useUser();
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [outputResult, setOutputResult] = useState();
    const [aiOutputImage, setAiOutputImage] = useState();
    const [openOutputDialog, setOpenOutputDialog] = useState(false);
    const [originalImage, setOriginalImage] = useState();
    const {userDetail, setUserDetail} = useContext(UserDetailContext);

    const onHandleInputChange = (value, fieldName) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value
        }))
    }

    const generateAiImage = async () => {
        if (!userDetail || userDetail.credits <= 0) {
            alert("You do not have enough credits to generate an AI image. Please purchase more credits.");
            return;
        }

        setLoading(true);
        const rawImageUrl = await SaveRawImageToAppWrite(formData.image);
        if (!rawImageUrl) {
            console.error("Failed to upload image");
            return;
        }

        const result = await axios.post("/api/redesign-room", { 
            imageUrl: rawImageUrl,
            roomType: formData?.roomType,
            designType: formData?.designType,
            additionalRequirement: formData?.additionalReq,
            userEmail: user?.primaryEmailAddress?.emailAddress
        });

        console.log("AI Response:", result.data);
        await updateUserCredits();
        setAiOutputImage(result.data.result); //downloadUrl for output img
        setOpenOutputDialog(true);
        setLoading(false);
        // router.push('/dashboard');
    };

    const SaveRawImageToAppWrite = async (file) => {
        if (!file) return null;

        try {
            const fileId = ID.unique();
            const response = await storage.createFile(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                fileId,
                file
            );
            console.log("Simple file uplaoded successfully to AppWrite:", response);

            const downloadUrl = storage.getFileView(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                response.$id
            );
            console.log("Simple File Download URL:", downloadUrl);
            setOriginalImage(downloadUrl);

            return downloadUrl;
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    };

    const updateUserCredits = async () => {

        const result = await db
        .update(Users)
        .set({ credits: userDetail?.credits - 1 })
        .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
        .returning({ id: Users.id });

        if(result){
            setUserDetail(prev => ({
                ...prev,
                credits: userDetail?.credits - 1,
            }));
            return result[0].id
        }
    }

  return (
    <div>
        <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
        <p className='text-center text-gray-500'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
            {/* Image Selection */}
            <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} />

            {/* Form Input Selection */}
            <div className=''>
                {/* Room Type */}
                <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />

                {/* Design/Interior Type */}
                <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />

                {/* Additional Requirement Textarea */}
                <AdditionalRequirement additionalReqInput={(value) => onHandleInputChange(value, 'additionalReq')} />

                {/* Button to Generate Image */}
                <Button className='mt-5 w-full' onClick={generateAiImage}>Generate</Button>
                <p className='text-sm text-gray-400 mb-52'>NOTE: 1 Credit will be used to redesign interior.</p>
            </div>
        </div>
        <CustomLoading loading={loading} />
        <AiOutputDialog 
            openDialog={openOutputDialog} 
            closeDialog={() => setOpenOutputDialog(false)} 
            orgImageUrl={originalImage}
            aiImageUrl={aiOutputImage}
        />
    </div>
  )
}

export default CreateNew
