"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      {children}
      {!isAdminPage && <Footer />}
    </>
  );
}