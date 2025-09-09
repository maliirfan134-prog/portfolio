import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Text Content */}
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-200'>
            Schedule a call with me to see if I can help
          </h1>
          <p className='mt-6 text-gray-400 text-base sm:text-lg'>
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </p>

          {/* info */}
          <div className='mt-7'>
            <div className='flex items-center space-x-3 mb-4'>
              <BiPhone className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>+92 325 1108017</p>
            </div>
          </div>
          <div className='mt-7'>
            <div className='flex items-center space-x-3 mb-4'>
              <BiEnvelope className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>maliirfan134@gmail.com</p>
            </div>
          </div>
          <div className='mt-7'>
            <div className='flex items-center space-x-3 mb-4'>
              <BiMap className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>
                H#f-304 Muhalah Maqsoodabad. Nawababad Wah Cantt.
              </p>
            </div>
          </div>

          {/* Social Icon */}
          <div className='flex items-center mt-8 space-x-3'>
            <a
              href="https://www.facebook.com/muhammad.ali.irfan.365717"
              target="_blank"
              rel="noopener noreferrer"
              className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300'
            >
              <FaFacebookF className='text-white w-6 h-6' />
            </a>

            <a
              href="https://github.com/maliirfan134-prog"
              target="_blank"
              rel="noopener noreferrer"
              className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-all duration-300'
            >
              <FaGithub className='text-white w-6 h-6' />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-ali-irfan-53544a378"
              target="_blank"
              rel="noopener noreferrer"
              className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all duration-300'
            >
              <FaLinkedin className='text-white w-6 h-6' />
            </a>

            <a
              href="https://www.instagram.com/aly._.k47/"
              target="_blank"
              rel="noopener noreferrer"
              className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300'
            >
              <FaInstagram className='text-white w-6 h-6' />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className='md:p-10 p-5 bg-[#131332] rounded-lg'>
          <input
            type="text"
            placeholder='Name'
            className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
          />
          <input
            type="email"
            placeholder='Email Address'
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
          />
          <input
            type="text"
            placeholder='Mobile Number'
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
          />
          <textarea
            placeholder='Your Message'
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'
          ></textarea>
          <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
