import Link from "next/link";
import { IoReturnDownBackSharp } from "react-icons/io5";

const HomeButton = ({ message = "Return to Home" }: { message?: string }) => {
  return (
    <Link
      href="/"
      className="mt-4 gap-2 flex items-center justify-evenly text-center w-52 h-[50px] border border-red-400 text-red-400 rounded-[5px]"
    >
      <IoReturnDownBackSharp />
      <span>{message}</span>
    </Link>
  );
};

export default HomeButton;
