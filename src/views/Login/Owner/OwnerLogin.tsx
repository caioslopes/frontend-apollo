"use client";
import Top from "@/components/Top/Top";
import Bottom from "@/components/Bottom/Bottom";
import FormSignIn from "./components/FormSignIn/FormSignIn";

export default function OwnerLogin() {
  return (
    <main className="bg-primary flex flex-col h-screen">
      <Top />
      <Bottom title="Proprietário">
        <FormSignIn />
      </Bottom>
    </main>
  );
}
