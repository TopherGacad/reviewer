import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/dino.jpg"
      width={50}
      height={50}
      priority
      alt="pinisna"
      className="md:w-[80px]"
    />
  );
};

export default Logo;
