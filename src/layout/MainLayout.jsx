import Navigation from "@/components/Navigation";

const MainLayout = (props) => {
  return (
    <>
      <Navigation />
      <main className="h-auto min-h-[calc(100vh-78px)] py-4">
        {props.children}
      </main>
    </>
  );
};

export default MainLayout;
