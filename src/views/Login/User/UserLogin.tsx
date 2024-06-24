"use client";
import Bottom from "@/components/Bottom/Bottom";
import Top from "@/components/Top/Top";
import { FormEstablishment } from "./components/FormEstablishment/FormEstablishment";
import { FormUser } from "./components/FormUser/FormUser";
import { useState } from "react";
import SelectGenres from "./components/SelectGenres/SelectGenres";
import { genresMocked } from "./components/SelectGenres/genres";

type Props = {
  params: {
    step: string;
    establishmentId: string;
  };
};

export enum Steps {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
}

export default function UserLogin({ params }: Props) {
  const [step, setStep] = useState<any>(Steps.FIRST);
  const [user, setUser] = useState<any>({
    username: "",
    genres: [],
    establishmentId: "",
  });

  console.log(user);

  const content: any = {
    first: (
      <main className="flex flex-col h-screen bg-primary">
        <Top />
        <Bottom title="Estabelecimento">
          <FormEstablishment setStep={setStep} setUser={setUser} />
        </Bottom>
      </main>
    ),
    second: (
      <main className="flex flex-col h-screen bg-primary">
        <Top />
        <Bottom title="Zinho">
          <FormUser setStep={setStep} setUser={setUser} />
        </Bottom>
      </main>
    ),
    third: (
      <main className="flex flex-col">
        <SelectGenres genres={genresMocked} user={user} setUser={setUser} />
      </main>
    ),
  };

  return content[step];
}
