import Link from "next/link";
import Logo from "./Logo";

const LogoText = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3 ">
        <Logo />
        <h1 className="text-purple-100 font-bold md:text-[20px]">OHMY</h1>
      </div>
    </Link>
  );
};

export default LogoText;
