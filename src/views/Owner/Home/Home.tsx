"use client";
import DrawerAccount from "./components/DrawerAccount/DrawerAccount";
import CardEstablishment from "./components/CardEstablishment/CardEstablishment";
import CardPlaylist from "./components/CardPlaylist/CardPlaylist";
import DrawerLinkSpotify from "./components/DrawerLinkSpotify/DrawerLinkSpotify";
import { getSpotifyAccessToken } from "../utils/getSpotifyAccessToken";
import { getOwnerDetails } from "../utils/getOwnerDetails";
import { OwnerDto } from "@/@types/owner";

type Props = {
  params: {
    code: string;
    email: string;
  };
};

export default function Home({ params }: Props) {
  const { code, email } = params;

  /* const owner = getOwnerDetails(email); */

  /* if (code && owner?.email && !owner.refreshToken) {
    getSpotifyAccessToken(code, owner.email);
  } */

  return (
    <div className="space-y-8">
      <div className="flex w-full justify-between">
        João Santos
        <DrawerAccount />
      </div>
      <CardEstablishment />
      <CardPlaylist variant="notHasCode" />
      <DrawerLinkSpotify />
    </div>
  );
}
