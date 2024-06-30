import { OwnerDto } from "@/@types/owner";
import Home from "@/views/Owner/Home/Home";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
type Props = {
  searchParams: {
    code: string;
  };
};

export default function page({ searchParams }: Props) {
  const accessToken = cookies().get("accessToken");
  const { code } = searchParams;

  const owner = jwtDecode(accessToken?.value || "");

  const params = {
    code: code || "",
    email: owner.sub || "",
  };

  return <Home params={params} />;
}
