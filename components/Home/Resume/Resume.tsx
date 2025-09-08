import React from 'react'
import ResumeCard from './ResumeCard'
import { FaReact } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid gird-cols-1 xl:gird-cols-2 gap-10'>
            { /* WORK PART */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>My Work <span className='text-cyan-200'>Experience</span></h1>
            </div>
            <div className='mt-10'>
                <ResumeCard Icon={FaReact} role="Front-End Developer" />
            </div>
            { /* EDUCATION PART */}
            <div><h1 className='text-3xl sm:text-4xl font-bold text-white'>My <span className='text-cyan-200'>Education</span></h1>
            </div>
            <div className='mt-10'>
                <ResumeCard Icon={FaReact} role="Bachelor in Software Engineering" date="Oct 2023 - July 2027" />
            </div>
            </div>      
    </div>
  )
}

export default Resume
