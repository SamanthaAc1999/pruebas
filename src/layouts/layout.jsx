import Navbar from "../components/Principal/Navbar";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className="pt-20 p-10 w-full h-full bg-[#F1F1F5]"> 
        {children}
      </div>
    </>
  );
};
