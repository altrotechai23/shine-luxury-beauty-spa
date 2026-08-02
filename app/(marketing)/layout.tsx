import type { ReactNode } from "react";
import AppLayout from "@/components/layout/AppLayout";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}