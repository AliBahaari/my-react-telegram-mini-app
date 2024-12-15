import Header from "@/components/layout/header";

function Default({ children }) {
  return (
    <div className="h-full flex flex-col gap-2">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Default;
