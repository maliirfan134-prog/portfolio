import Image from 'next/image';
import React from 'react'

type props = {
    name: string;
    role: string;
    image: string;
}


const ClientReviewCard = ( {image, role, name }: props ) => {
  return (
    <div className='m-2'>
        <Image src={image} alt='client' width={60} height={60} className='rounded-full' />
        <p className='mt-6 text-base text-gray-200 font-medium'>
        &quote;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis iure tempore culpa exercitationem architecto mollitia at temporibus modi ducimus ipsa ad incidunt consectetur quae! Accusamus veniam aspernatur cum alias.&quote;
        </p>
        <h1 className='mt-6 text-xl font-bold text-cyan-200'>{name}</h1>
        <p className='m-1 text-white'>{role}</p>      
    </div>
  )
}

export default ClientReviewCard
