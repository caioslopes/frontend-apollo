import UserLogin from "@/views/Login/User/UserLogin";

type Props = {
  searchParams: {
    step: string;
    establishmentId: string;
  };
};

export default function page({ searchParams }: Props) {
  const { step, establishmentId } = searchParams;

  const params = {
    step: step ? step : "first",
    establishmentId: establishmentId ? establishmentId : "",
  };

  return <UserLogin params={params} />;
}
