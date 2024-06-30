import { OwnerTokenDto } from "@/@types/owner";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = cookies().get("accessToken");

  let user: OwnerTokenDto = {} as OwnerTokenDto;

  if (accessToken?.value) user = jwtDecode(accessToken.value);

  if (!user?.scope?.includes("ROLE_ADMIN")) redirect("/");

  return (
    <>
      <Header />
      <main className="mt-10 px-6 mb-28">{children}</main>
      <Menu />
    </>
  );
}
