import HomeButton from "./HomeButton";

const PageNotFound = () => {
  return (
    <div className="p-8font-semibold min-h-[80vh] flex flex-col items-center justify-center">
      <p className="text-4xl text-red-500 ">Page not found.</p>
      <HomeButton />
    </div>
  );
};

export default PageNotFound;
