import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-5">
        <Header />
        {children}
      </main>
    </div>
  );
};
export default layout;
