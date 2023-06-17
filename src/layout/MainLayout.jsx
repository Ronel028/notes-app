import Navigation from "@/components/Navigation";

const MainLayout = (props) => {
  return (
    <>
      <Navigation />
      <main className=" w-[90%] max-w-[1200px] mx-auto h-auto min-h-[calc(100vh-78px)] py-3">
        {props.children}
      </main>
    </>
  );
};

export default MainLayout;
