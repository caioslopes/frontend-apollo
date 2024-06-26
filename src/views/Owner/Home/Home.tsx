"use client";
import DrawerAccount from "./components/DrawerAccount/DrawerAccount";
import CardEstablishment from "./components/CardEstablishment/CardEstablishment";
import CardPlaylist from "./components/CardPlaylist/CardPlaylist";
import DrawerLinkSpotify from "./components/DrawerLinkSpotify/DrawerLinkSpotify";
import { getOwnerDetails } from "../hooks/getOwnerDetails";
import { getSpotifyAccessToken } from "../utils/getSpotifyAccessToken";

type Props = {
  params: {
    code: string;
    email: string;
  };
};

export default function Home({ params }: Props) {
  const { code, email } = params;
  const { data, error, isLoading, mutate } = getOwnerDetails(email);
  const owner = data;
  const hasAuthorizationCode = owner?.refreshToken ? true : false;

  if (code && owner?.email && !owner.refreshToken) {
    getSpotifyAccessToken(code, owner.email);
    mutate();
  }

  return (
    <div className="space-y-8">
      {owner && (
        <>
          <div className="flex w-full justify-between">
            {owner.name}
            <DrawerAccount owner={owner} />
          </div>
          <CardEstablishment />
          <CardPlaylist hasAuthorizationCode={hasAuthorizationCode} />
          <DrawerLinkSpotify hasAuthorizationCode={hasAuthorizationCode} />
        </>
      )}
    </div>
  );
}
