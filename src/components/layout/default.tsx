import Header from "@/components/layout/header";

function Default({ children }) {
  return (
    <div className="h-full">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Default;
