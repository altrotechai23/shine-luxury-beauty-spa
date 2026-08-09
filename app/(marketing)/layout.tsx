import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="relative min-h-screen overflow-x-hidden">
        {children}
      </main>

      <Footer />

      {/* <FloatingWhatsApp /> */}
    </>
  );
}