import Index from "@/views/Index/Index";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Apollo Music",
};

export default function page() {
  const ownerToken = cookies().get("ownerToken");
  const userToken = cookies().get("userToken");

  if (ownerToken) {
    if (ownerToken?.value.length > 0 && ownerToken?.name === "ownerToken") {
      redirect("/owner/home");
    }
  }

  if (userToken) {
    if (userToken?.value.length > 0 && userToken?.name === "userToken") {
      redirect("/user/home");
    }
  }

  return <Index />;
}
