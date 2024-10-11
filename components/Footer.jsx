import React from 'react'

// Footer Componenet.
const Footer = () => {
  return (
    <div className='*:text-white bg-gray-700 flex justify-center items-center flex-col gap-2 p-5'>
        <h1 className='text-3xl font-bold tracking-widest'>AST</h1>
        <h5 className='opacity-70'>©2024 Assignment Submission Portal</h5>
        <h3 className='mt-4 opacity-70 italic'>Developed Using</h3>
        <div className='flex justify-center items-center flex-wrap gap-2 my-1'>
            <div className='flex justify-center items-center flex-col group'><object data="/tailwind.svg" className='w-5 h-5'></object><span className='text-xs invisible group-hover:visible'>Tailwind CSS</span></div>
            <div className='flex justify-center items-center flex-col group'><object data="/javascript.svg" className='w-5 h-5'></object><span className='text-xs invisible group-hover:visible'>JavaScript</span></div>
            <div className='flex justify-center items-center flex-col group'><object data="/react.svg" className='w-5 h-5'></object><span className='text-xs invisible group-hover:visible'>React JS</span></div>
            <div className='flex justify-center items-center flex-col group'><object data="/nodejs.svg" className='w-5 h-5'></object><span className='text-xs invisible group-hover:visible'>Node.js</span></div>
            <div className='flex justify-center items-center flex-col group'><object data="/nextjs.svg" className='w-5 h-5'></object><span className='text-xs invisible group-hover:visible'>Next JS</span></div>
            <div className='flex justify-center items-center flex-col group'><img src="/authjs.svg" className='w-5 h-5 rounded-full'/><span className='text-xs invisible group-hover:visible'>Auth.js</span></div>
            <div className='flex justify-center items-center flex-col group'><object data="/mongodb.svg" className='w-5 h-5'></object><span className='text-xs invisible group-hover:visible'>MongoDB</span></div>

            {/* <object data="/javascript.svg" className='w-5 h-5'></object>
            <object data="/react.svg" className='w-5 h-5'></object>
            <object data="/nodejs.svg" className='w-5 h-5'></object>
            <object data="/nextjs.svg" className='w-5 h-5'></object>
            <img src="/authjs.svg" className='w-5 h-5 rounded-full'/>
            <object data="/mongodb.svg" className='w-5 h-5'></object> */}
        </div>
    </div>
  )
}

export default Footer