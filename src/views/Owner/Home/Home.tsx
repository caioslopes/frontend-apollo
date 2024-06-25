import React from "react";
import DrawerAccount from "./components/DrawerAccount/DrawerAccount";
import EstablishmentCard from "./components/EstablishmentCard/EstablishmentCard";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex w-full justify-between">
        João Santos
        <DrawerAccount />
      </div>
      <EstablishmentCard />
    </div>
  );
}
