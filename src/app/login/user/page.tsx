import UserLogin from "@/views/Login/User/UserLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    step: string;
    establishmentId: string;
  };
};

export default function page({ searchParams }: Props) {
  const userToken = cookies().get("userToken");
  const { step, establishmentId } = searchParams;

  const params = {
    step: step ? step : "first",
    establishmentId: establishmentId ? establishmentId : "",
  };

  if (userToken) {
    if (userToken?.value.length > 0 && userToken?.name === "userToken") {
      redirect("/user/home");
    }
  }

  return <UserLogin params={params} />;
}
