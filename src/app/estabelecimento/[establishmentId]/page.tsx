import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estabelecimento",
};

type Props = {
  params: {
    establishmentId: string;
  };
};

export default function Estabelecimento({ params }: Props) {
  return <div>Estabelecimento {JSON.stringify(params)}</div>;
}
