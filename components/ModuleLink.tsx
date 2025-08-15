import Link from "next/link";

type ModuleLinkProps = {
  href: string;
  title: string;
  label: string;
  items: string;
  textClass: string;
  bgClass: string;
};

export default function ModuleLink({ href, title, label, items, textClass, bgClass }: ModuleLinkProps) {
  const baseButton =
    "w-full h-[90px] md:h-[100px] flex flex-col items-center justify-center rounded-[5px] font-bold text-center md:text-[20px] hover:bg-yellow-500 hover:text-[#121212]";

  const itemText = `font-thin text-[14px] md:text-[16px] ${textClass}`;

  return (
    <Link
      href={href}
      className={`${baseButton} ${bgClass}`}
    >
      <span>{label ? `${title}: ${label}` : title}</span>
      <span className={itemText}>{items}</span>
    </Link>
  );
}
