import OwnerLogin from "@/views/Login/Owner/OwnerLogin";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const accessToken = cookies().get("accessToken");

  let user: any = {};

  if (accessToken?.value) {
    user = jwtDecode(accessToken.value);
  }

  if (user?.scope?.includes("ROLE_ADMIN")) redirect("/owner/home");

  return <OwnerLogin />;
}
