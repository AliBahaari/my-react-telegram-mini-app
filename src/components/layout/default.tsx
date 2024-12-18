import Header from "@/components/layout/header";

interface DefaultProps {
  children: React.ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col gap-2">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Default;
