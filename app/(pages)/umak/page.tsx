"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Umak = () => {
  // Define the required code
  const correctCode = "1234"; // Replace with your desired code
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
    <div className="bg-[#47366D] text-[#fafafa] flex flex-col w-screen h-screen justify-center items-center text-center mx-auto">
      <div className="font-bold text-[36px]">
        Oh-May!
        <br /> <span className="text-[#39ff14]">Brain</span> Smasher
      </div>
      <div>
        <Image
          src="/assets/omay.jpg"
          width={100}
          height={50}
          priority
          alt="pinisna"
          className="rounded-[50%] mb-10"
        />
      </div>
      <div className="h-[250px] w-[260px] flex gap-5">
        <div className="h-full w-[50%] flex flex-col gap-5">
          <Link
            href="/umak/module1/set1"
            className="w-full h-14 bg-[#ff5765] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Module 1: 1st Set
          </Link>
          <Link
            href="/umak/module1/set2"
            className="w-full h-14 bg-[#ff5765] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Module 1: 2nd Set
          </Link>
          <Link
            href="/umak/cluster1/set1"
            className="w-full h-14 bg-[#8a6fdf] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Cluster 1: 1st Set
          </Link>
          <Link
            href="/umak/cluster1/set2"
            className="w-full h-14 bg-[#8a6fdf] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Cluster 1: 2nd Set
          </Link>
        </div>
        <div className="h-full w-[50%] flex flex-col gap-5">
          <Link
            href="/umak/cluster2/set1"
            className="w-full h-14 bg-[#30d5c8] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Cluster 2: 1st Set
          </Link>
          <Link
            href="/umak/cluster2/set2"
            className="w-full h-14 bg-[#30d5c8] flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Cluster 2: 2nd Set
          </Link>
          <Link
            href="/umak/cluster3/set1"
            className="w-full h-14 bg-blue-500 flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Cluster 3: 1st Set
          </Link>
          <Link
            href="/umak/cluster3/set2"
            className="w-full h-14 bg-blue-500 flex items-center justify-center rounded-[5px] hover:bg-[yellow] hover:text-[#121212]"
          >
            Cluster 3: 2nd Set
          </Link>
        </div>
      </div>
      <button onClick={handleLogout} className="mt-5 border-[1px] border-solid px-5 rounded-[5px] ">Logout</button>
      <p className="text-[12px] mt-5">&copy; topepe - 2024</p>
    </div>
  );
};

export default Umak;
