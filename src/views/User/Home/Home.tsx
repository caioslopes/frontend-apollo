"use client";
import CardGenres from "@/components/CardGenres/CardGenres";
import DrawerAccount from "./components/DrawerAccount/DrawerAccount";
import CardEstablishment from "./components/CardEstablishment/CardEstablishment";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex w-full justify-between">
        Username
        <DrawerAccount />
      </div>
      <CardEstablishment />
      <CardGenres
        title="Gêneros escolhidos"
        description="Lorem ipsum"
        genres={["funk"]}
      />
    </div>
  );
}
