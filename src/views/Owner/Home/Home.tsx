import React from "react";
import DrawerAccount from "./components/DrawerAccount/DrawerAccount";
import CardEstablishment from "./components/CardEstablishment/CardEstablishment";
import CardPlaylist from "./components/CardPlaylist/CardPlaylist";

type Props = {
  params: {
    code: string;
  };
};

export default function Home({ params }: Props) {
  /* if (params.code) {
    console.log(params.code);
  } */

  return (
    <div className="space-y-8">
      <div className="flex w-full justify-between">
        João Santos
        <DrawerAccount />
      </div>
      <CardEstablishment />
      <CardPlaylist variant="notHasCode" />
    </div>
  );
}
