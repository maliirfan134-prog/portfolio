import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        A small selection of recent <br /> <span className='text-cyan-300'> projects</span> 
       </h1>
       <div className='w-[70%] mx-auto grid gird-cols-1 md:grid-cols-2 gap-10 mt-16'>
        { /* Project 1 */}
        <div>
            <Image src='/images/p1.PNG' alt='img' width={800}
            height={650} className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Login & Sign up Foam
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>Modern Login UI</h1>
        </div>
        { /* Project 2 */}
        <div>
            <Image src='/images/p2.PNG' alt='img' width={800}
            height={650} className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Library Management System 
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>Library Management System Dashboard UI</h1>
        </div>
       </div>
    </div>
  )
}

export default Projects
