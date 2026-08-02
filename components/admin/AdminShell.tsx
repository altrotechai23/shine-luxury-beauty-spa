import DesktopSidebar from "./DesktopSidebar";
import MobileBottomNav from "./MobileBottomNav";
import TopBar from "./TopBar";

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-stone-50">

      <DesktopSidebar />

      <div className="flex flex-1 flex-col">

        <TopBar />

        <main className="flex-1 p-6 lg:p-10">

          {children}

        </main>

      </div>

      <MobileBottomNav />

    </div>
  );
}