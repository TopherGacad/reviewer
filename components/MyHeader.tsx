import LogoText from "./LogoText";

const MyHeader = () => {
  return (
    <header className="sticky top-0 bg-[#58408d]">
      <nav className="my-container h-[64px]  flex items-center">
        <ul></ul>
        <LogoText />
      </nav>
    </header>
  );
};

export default MyHeader;
