"use client";
import Bottom from "@/components/Bottom/Bottom";
import Top from "@/components/Top/Top";
import { FormEstablishment } from "./components/FormEstablishment/FormEstablishment";
import { FormUser } from "./components/FormUser/FormUser";
import { useState } from "react";

type Props = {
  params: {
    step: string;
    establishmentId: string;
  };
};

enum Steps {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
}

export default function UserLogin({ params }: Props) {
  const [steps, setSteps] = useState<any>(params.step);

  const content: any = {
    first: (
      <Bottom title="Estabelecimento">
        <FormEstablishment />
      </Bottom>
    ),
    second: (
      <Bottom title="Estabelecimento">
        <FormUser />
      </Bottom>
    ),
    third: <div>oi</div>,
  };

  return (
    <main className="bg-primary flex flex-col h-screen">
      <Top />
      {content[steps]}
    </main>
  );
}
