"use client"
import Image from 'next/image';
import React, { useState } from 'react';

function ImageSelection({ selectedImage }) {
    const [file, setFile] = useState();

    const onFileSelection = (e) => {
        setFile(e.target.files[0]);
        selectedImage(e.target.files[0]);
    };

    return (
        <div className="flex flex-col items-center">
            <label className="text-lg font-semibold mb-2">Select Image of your room</label>

            <div className="mt-3 w-full max-w-sm">
                <label htmlFor="upload-image">
                    <div 
                        className={`border-2 border-dashed rounded-xl flex justify-center items-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg transition-all duration-300 ${file ? 'bg-white p-5' : 'p-28'}`}
                    >
                        {!file ? (
                            <Image src={'/imageupload.png'} alt="image-placeholder" width={70} height={70} />
                        ) : (
                            <Image 
                                className='w-full h-auto max-h-[300px] object-cover rounded-lg'
                                src={URL.createObjectURL(file)} alt="Selected Image" width={300} height={300} 
                            />
                        )}
                    </div>
                </label>
                <input 
                    type="file" 
                    accept='image/*' 
                    id='upload-image' 
                    className="hidden"
                    onChange={onFileSelection} 
                />
            </div>
        </div>
    );
}

export default ImageSelection;
