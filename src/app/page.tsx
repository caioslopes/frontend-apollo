import Index from "@/views/Index/Index";
import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Apollo Music",
};

export default function page() {
  const accessToken = cookies().get("accessToken");

  let user: any = {};

  if (accessToken?.value) {
    user = jwtDecode(accessToken.value);
  }

  if (user?.scope?.includes("ROLE_ADMIN")) redirect("/owner/home");

  if (user?.scope?.includes("ROLE_USER")) redirect("/user/home");

  return <Index />;
}
