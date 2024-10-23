import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-[#47366D] text-[#fafafa] flex flex-col w-screen h-screen mx-auto'>
      {/* Navbar */}
      <div className='h-[40px] bg-[#58408d] flex items-center pl-5 gap-3 md:h-[60px] md:pl-10 py-5'>
        <Image
          src="/assets/dino.jpg"
          width={50}
          height={50}
          priority
          alt='pinisna'
          className='md:w-[80px]'
        />
        <span className='font-bold md:text-[20px]'>OHMY </span>
      </div>

      {/* Hero Section */}
      <div className='h-[100px] px-5 my-5 py-2 flex flex-col justify-center md:h-[150px] md:px-10 md:my-10'>
        <div className='font-bold text-[30px] text-[#6BE07B] md:text-[50px]'>Let's Review!</div>
        <div className='text-[14px] text-[#c0b7d3] md:text-[20px]'>Goodluck, future RRT</div>
      </div>

      <div className='h-full w-full flex flex-col py-2 px-2 md:py-6 gap-5'>
        <div className='flex gap-2 md:gap-5 justify-center items-center'>
          <Link href="./module1/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#ff5765] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Module 1: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#72242b]'>50 items test</span></Link>
          <Link href="./module1/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#ff5765] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Module 1: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#72242b]'>50 items test</span></Link>
        </div>
        
        <div className='flex gap-2 md:gap-5 justify-center items-center'>
          <Link href="./cluster2/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#30d5c8] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 2: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#197069]'>30 items test</span></Link>
          <Link href="./cluster2/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#30d5c8] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 2: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#197069]'>30 items test</span></Link>
        </div>

        <div className='flex gap-2 md:gap-5 justify-center items-center'>
          <Link href="./cluster3/set1" className='w-[48%] h-[90px] md:h-[100px] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 3: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-blue-800'>30 items test</span></Link>
          <Link href="./cluster3/set2" className='w-[48%] h-[90px] md:h-[100px] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 3: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-blue-800'>30 items test</span></Link>
        </div>

        <div className='flex gap-2 md:gap-5 justify-center items-center'>
          <Link href="./cluster4/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#40ac4e] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 4: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#23682c]'>30 items test</span></Link>
          <Link href="./cluster4/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#40ac4e] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 4: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#23682c]'>40 items test</span></Link>
        </div>
      </div>

      <Link href="./umak" className='mb-10'>
        <div className='flex justify-center items-center gap-2 text-[#6BE07B]'>Access premium <FaArrowRight /></div>
      </Link>

        <p className='text-[12px] mt-5'>&copy; topepe - 2024 | v.1.2</p>
    </div>
    
  )
}

export default Home