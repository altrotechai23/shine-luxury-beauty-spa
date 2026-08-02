import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}