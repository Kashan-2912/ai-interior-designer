import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({selectedDesignType}) {
    const designs = [
        {
            name: 'Modern',
            image: '/modern.png'
        },
        {
            name: 'Industrial',
            image: '/industrial.png'
        },
        {
            name: 'Bohemian',
            image: '/bohemian.png'
        },
        {
            name: 'Traditional',
            image: '/traditional.png'
        },
        {
            name: 'Rustic',
            image: '/rustic.png'
        },
        {
            name: 'Minimalist',
            image: '/minimalist.png'
        },
    ]

    const [selectedOption , setSelectedOption] = useState();

  return (
    <div className='mt-5'>
        <label className='text-gray-500'>Interior Design Type</label>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
            {designs.map((design, index) => (
                <div key={index} onClick={() => {
                    setSelectedOption(design.name)
                    selectedDesignType(design.name)
                }}>
                    <Image src={design.image} alt={design.name} width={100} height={100} className={`h-[70px] rounded-md hover:scale-105 translate-all cursor-pointer ${design.name===selectedOption && 'border-2 border-primary rounded-md p-1'}`} />

                    <h2>{design.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DesignType