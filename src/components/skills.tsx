import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='m-3 h-40'>
      <div className=' text-xl font-semibold text-amber-400 my-20 mb-10'>
        <h1>Skillset</h1>
      </div>
      <div className='flex gap-3 justify-center flex-wrap'>
      <span className='bg-white w-fit p-2 rounded-md text-sm'>TYPESCRIPT</span>
      <span className='bg-white w-fit p-2 rounded-md text-sm'>TAILWIND CSS</span>
      <span className='bg-white w-fit p-2 rounded-md text-sm'>NEXTJS</span>
      <span className='bg-white w-fit p-2 rounded-md text-sm'>HTML</span>
      </div>
    </div>
  )
}

export default skills