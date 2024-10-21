import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-[#47366D] text-[#fafafa] flex flex-col w-screen h-screen justify-center items-center text-center mx-auto'>
      <div className='font-bold text-[36px]'>Oh-May!<br/> <span className='text-[#39ff14]'>Brain</span> Smasher</div>
      <div>
        <Image 
            src="/assets/omay.jpg"
            width={100}
            height={50}
            priority
            alt='pinisna'
            className='rounded-[50%] mb-10'
            />
      </div>
      <div className='h-[250px] w-[260px] flex flex-col gap-5'>
        <Link href="./firstset" className='w-full h-14 bg-[#ff5765] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]'>Module 1: 1st Set</Link>
        <Link href="./secondset" className='w-full h-14 bg-[#8a6fdf] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]'>Module 1: 2nd Set</Link>
        <Link href="./clusterset" className='w-full h-14 bg-[#30d5c8] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]'>Cluster 1: 1st Set</Link>
        <Link href="./clusterset2" className='w-full h-14 bg-blue-500 flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]'>Cluster 1: 2nd Set</Link>
      </div>
      <p className='text-[12px] mt-5'>&copy; topepe - 2024</p>
    </div>
    
  )
}

export default Home