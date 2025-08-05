"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUnlockCode } from "@/hooks/useUnlockCode"; // adjust path if different
import { toast } from "react-toastify";

const VALID_UNLOCK_CODE = process.env.NEXT_PUBLIC_UNLOCK_CODE;

export default function UnlockPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const { isUnlocked, setUnlockCode, hasLoaded } = useUnlockCode();

  if (!hasLoaded) {
    return <div className="flex justify-center items-center min-h-[80vh] text-blue-500 text-2xl">Loading exam...</div>;
  }

  const redirectToHome = () => {
    router.push("/");
  };

  if (isUnlocked) {
    return redirectToHome();
  }

  const handleSubmit = () => {
    if (!code) {
      return;
    }
    if (code === VALID_UNLOCK_CODE) {
      setUnlockCode();
      redirectToHome();
    } else {
      toast.error("Invalid code");
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center  px-4">
      <div className="bg-purple-200 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Unlock Other Exams</h1>

        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter unlock code"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
          disabled={!code}
        >
          Unlock
        </button>
      </div>
    </div>
  );
}
