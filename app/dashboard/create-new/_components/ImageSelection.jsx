"use client"
import Image from 'next/image';
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file, setFile] = useState();
    const onFileSelection = (e) => {
        setFile(e.target.files[0]);
        selectedImage(e.target.files[0]);
    }

  return (
    <div>
        <label>
            Select Image of your room
        </label>

        <div className='mt-3'>
            <label htmlFor="upload-image">
                <div className={`p-28 border-2 border-dashed rounded-xl flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg ${file && 'p-0 bg-white'}`}>
                    {!file? <Image src={'/imageupload.png'} alt="image-placeholder" width={70} height={70} />
                     : 
                     <Image 
                     className='w-[300px] h-[300px] object-cover'
                     src={URL.createObjectURL(file)} alt="image-placeholder" width={300} height={300} />}
                </div>
            </label>
            <input type="file" accept='image/*' id='upload-image' style={{display: 'none'}}
                onChange={onFileSelection}
            />
        </div>
    </div>
  )
}

export default ImageSelection