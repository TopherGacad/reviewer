"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Umak = () => {
  // Define the required code
  const correctCode = "ilabjonini"; // Replace with your desired code
  const router = useRouter();

  // Set up state for code input and authentication status
  const [inputCode, setInputCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  // Start with loading set to true

  // Check localStorage when the component mounts
  useEffect(() => {
    // Simulate checking localStorage
    const savedAuthStatus = localStorage.getItem("isAuthenticated");
    if (savedAuthStatus === "true") {
      setIsAuthenticated(true); // Set authenticated if previously authenticated
    }
    setIsLoading(false); // Set loading to false after check
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  // Function to handle form submission and check the code
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state

    // Simulate an asynchronous process (such as validating the code)
    setTimeout(() => {
      if (inputCode === correctCode) {
        setIsAuthenticated(true); // Allow access if the code is correct
        localStorage.setItem("isAuthenticated", "true"); // Save to localStorage
      } else {
        alert("Incorrect code! Please try again.");
      }
      setIsLoading(false); // End loading after checking the code
    }, 1000); // Simulate a 1-second delay
  };

  // Show loading screen if in loading state
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#47366D] text-[#fafafa] font-bold text-[28px]">
        <Image
          src="/assets/shrekloading.jpg"
          width={100}
          height={50}
          priority
          alt="pinisna"
          className="mb-10"
        />
        Loading be wait lang..
      </div>
    );
  }

  if (!isAuthenticated) {
    // Render code input form if not authenticated
    return (
      <div className="bg-[#47366D] text-[#fafafa] flex flex-col w-screen h-screen justify-center items-center text-center mx-auto">
        <div className="font-bold text-[36px] mb-5">Enter Access Code</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            placeholder="Enter code"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="p-2 rounded-lg text-[#121212]"
          />
          <button type="submit" className="bg-[#39ff14] p-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    );
  }

  // Render the protected content if authenticated
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

        <div className='font-bold text-[16px] text-[#a184dd] md:text-[20px] px-5'>Weekly Mock Exam - 50 items</div>

        <div className="w-full h-full flex flex-col pt-2 pb-5 px-5 md:py-6 gap-5">
          <div className='flex gap-2 md:gap-5 justify-center items-center'>
            <Link href="./umak/mockexam1/moderate" className='w-[48%] h-[90px] md:h-[100px] text-[#47366D] bg-[#fafafa] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Mock Exam W1<br/><span className='font-bold text-[14px] md:text-[16px] text-[#dab44b]'>Difficulty: Moderate</span></Link>
            <Link href="./umak/mockexam1/hard" className='w-[48%] h-[90px] md:h-[100px] text-[#47366D] bg-[#fafafa] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Mock Exam W1<br/><span className='font-bold text-[14px] md:text-[16px] text-[#e03c3c]'>Difficulty: Hard</span></Link>
          </div>
          <div className='flex gap-2 md:gap-5 justify-center items-center'>
            <Link href="./umak/mockexam2/difficult" className='w-[48%] h-[90px] md:h-[100px] text-[#47366D] bg-[#fafafa] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Mock Exam W2 Set 1<br/><span className='font-bold text-[14px] md:text-[16px] text-[#e03c3c]'>Difficulty: Difficult</span></Link>
            <Link href="./umak/mockexam2/difficult2" className='w-[48%] h-[90px] md:h-[100px] text-[#47366D] bg-[#fafafa] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Mock Exam W2 Set 2<br/><span className='font-bold text-[14px] md:text-[16px] text-[#e03c3c]'>Difficulty: Difficult</span></Link>
          </div>
        </div>

        <hr className="mx-10 border-[#c0b7d3] py-8"/>

        <div className='h-full w-full flex flex-col py-2 px-5 md:py-6 gap-5'>
            <div className='flex gap-2 md:gap-5 justify-center items-center'>
                <Link href="./umak/module1/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#ff5765] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Module 1: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#72242b]'>50 items test</span></Link>
                <Link href="./umak/module1/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#ff5765] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Module 1: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#72242b]'>50 items test</span></Link>
            </div>
            <div className='flex gap-2 md:gap-5 justify-center items-center'>
                <Link href="./umak/cluster1/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#da9a5f] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 1: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#94653a]'>50 items test</span></Link>
                <Link href="./umak/cluster1/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#da9a5f] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 1: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#94653a]'>50 items test</span></Link>
            </div>
            
            <div className='flex gap-2 md:gap-5 justify-center items-center'>
                <Link href="./umak/cluster2/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#30d5c8] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 2: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#197069]'>30 items test</span></Link>
                <Link href="./umak/cluster2/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#30d5c8] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 2: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#197069]'>30 items test</span></Link>
            </div>

            <div className='flex gap-2 md:gap-5 justify-center items-center'>
                <Link href="./umak/cluster3/set1" className='w-[48%] h-[90px] md:h-[100px] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 3: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-blue-800'>30 items test</span></Link>
                <Link href="./umak/cluster3/set2" className='w-[48%] h-[90px] md:h-[100px] bg-blue-500 flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 3: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-blue-800'>30 items test</span></Link>
            </div>

            <div className='flex gap-2 md:gap-5 justify-center items-center'>
                <Link href="./umak/cluster4/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#40ac4e] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 4: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#23682c]'>30 items test</span></Link>
                <Link href="./umak/cluster4/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#40ac4e] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 4: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#23682c]'>40 items test</span></Link>
            </div>

            <div className='flex gap-2 md:gap-5 justify-center items-center'>
                <Link href="./umak/cluster5/set1" className='w-[48%] h-[90px] md:h-[100px] bg-[#d86280] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 5: 1st Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#92394f]'>30 items test</span></Link>
                <Link href="./umak/cluster5/set2" className='w-[48%] h-[90px] md:h-[100px] bg-[#d86280] flex flex-col items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212] font-bold md:text-[20px]'>Cluster 5: 2nd Set <br/><span className='font-thin text-[14px] md:text-[16px] text-[#92394f]'>30 items test</span></Link>
            </div>
        </div>

        <div className="w-full h-[50px] flex items-center justify-center">
            <button onClick={handleLogout} className="mt-5 w-[30%] border-[1px] border-solid px-5 rounded-[5px] ">Logout</button>
        </div>
    
    
        <p className='text-[12px] mt-5 bottom-0'>&copy; topepe - 2024 | v.1.2</p>
  </div>
  );
};

export default Umak;
