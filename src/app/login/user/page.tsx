import UserLogin from "@/views/Login/User/UserLogin";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    step: string;
    establishmentId: string;
  };
};

export default function page({ searchParams }: Props) {
  const accessToken = cookies().get("accessToken");
  const { step, establishmentId } = searchParams;

  const params = {
    step: step ? step : "first",
    establishmentId: establishmentId ? establishmentId : "",
  };

  let user: any = {};

  if (accessToken?.value) {
    user = jwtDecode(accessToken.value);
  }
  if (user?.scope?.includes("ROLE_USER")) redirect("/user/home");

  return <UserLogin params={params} />;
}
