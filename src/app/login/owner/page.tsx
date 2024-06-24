import OwnerLogin from "@/views/Login/Owner/OwnerLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const ownerToken = cookies().get("ownerToken");

  if (ownerToken) {
    if (ownerToken?.value.length > 0 && ownerToken?.name === "ownerToken") {
      redirect("/owner/home");
    }
  }

  return <OwnerLogin />;
}
