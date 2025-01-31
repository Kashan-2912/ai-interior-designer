"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalRequirement from './_components/AdditionalRequirement'
import { Button } from 'components/ui/button'

function CreateNew() {

    const [formData, setFormData] = useState([]);

    const onHandleInputChange = (value, fieldName) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value
        }))
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
                <Button className='mt-5 w-full'>Generate</Button>
                <p className='text-sm text-gray-400 mb-52'>NOTE: 1 Credit will be used to redesign interior.</p>
            </div>
        </div>
    </div>
  )
}

export default CreateNew