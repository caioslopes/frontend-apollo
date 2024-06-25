import { UserTokenDto } from "@/@types/user";
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

  let user: UserTokenDto = {} as UserTokenDto;

  if (accessToken?.value) user = jwtDecode(accessToken.value);

  if (!user?.scope?.includes("ROLE_USER")) redirect("/");

  return (
    <>
      <Header />
      <main className="mt-10 px-6 h-[calc(100vh_-_8rem)] overflow-auto">
        {children}
      </main>
      <Menu />
    </>
  );
}
