import Header from "@/components/Header/Header";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mt-16 px-6">{children}</main>
    </>
  );
}
