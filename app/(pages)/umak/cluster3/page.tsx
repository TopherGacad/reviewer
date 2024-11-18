import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from 'react-icons/io';


const Cluster3Menu = () => {
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
         <div className='h-[100px] px-5 my-5 py-2 flex items-center gap-5 md:h-[150px] md:px-10 md:my-10'>
            <div>
                <Link href="/umak"><IoMdArrowRoundBack className='w-8 h-8 text-[#6BE07B]'/></Link>
            </div>

            <div className='flex flex-col'>
                <div className='font-bold text-[30px] text-[#6BE07B] md:text-[50px]'>Cluster 3</div>
                <div className='text-[14px] text-[#c0b7d3] md:text-[20px]'>Goodluck, Luv</div>
            </div>
        </div>

        <div className="w-full h-full flex flex-col items-center pt-2 pb-5 px-2 md:py-6 gap-3 md:gap-5">
            <Link href="/umak/cluster3/set1" className='w-[80%] md:w-[70%] h-[90px] md:h-[100px] text-[#fafafa] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Set 1<br/><span className='font-bold text-[14px] md:text-[16px] text-[#dab44b]'>Difficulty: Moderate</span></Link>
            <Link href="/umak/cluster3/set2" className='w-[80%] md:w-[70%] h-[90px] md:h-[100px] text-[#fafafa] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Set 2<br/><span className='font-bold text-[14px] md:text-[16px] text-[#e03c3c]'>Difficulty: Hard</span></Link>
            <Link href="/umak/cluster3/lower-ext-posi" className='w-[80%] md:w-[70%] h-[90px] md:h-[100px] text-[#fafafa] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Lower-Ext-Posi<br/><span className='font-bold text-[14px] md:text-[16px] text-[#e03c3c]'>Difficulty: Hard</span></Link>
            <Link href="/umak/cluster3/upper-ext-posi" className='w-[80%] md:w-[70%] h-[90px] md:h-[100px] text-[#fafafa] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Upper-Ext-Posi<br/><span className='font-bold text-[14px] md:text-[16px] text-[#e03c3c]'>Difficulty: Hard</span></Link>
        </div>

        <p className='text-[12px] mt-5 bottom-0'>&copy; topepe - 2024 | v.1.2</p>
  </div>
  )
}

export default Cluster3Menu