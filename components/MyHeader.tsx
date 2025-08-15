import Link from "next/link";
import LogoText from "./LogoText";
import { TiDocumentText } from "react-icons/ti";

const MyHeader = () => {
  return (
    <header className="sticky top-0 bg-[#58408d]">
      <nav className="my-container h-[64px]  flex items-center">
        <ul></ul>
        <LogoText />
        <Link
          href="/scores"
          className=" ml-auto cursor-pointer"
        >
          <TiDocumentText
            size={30}
            className="text-gray-200"
          />
        </Link>
      </nav>
    </header>
  );
};

export default MyHeader;
