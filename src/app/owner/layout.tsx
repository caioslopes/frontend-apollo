import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mt-16 px-6 h-[calc(100vh_-_10rem)] overflow-auto">
        {children}
      </main>
      <Menu />
    </>
  );
}
