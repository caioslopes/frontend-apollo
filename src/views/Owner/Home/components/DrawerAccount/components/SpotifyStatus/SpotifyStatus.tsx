import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  hasAuthorizationCode: boolean;
};

export default function SpotifyStatus({ hasAuthorizationCode }: Props) {
  if (hasAuthorizationCode) {
    return (
      <>
        <p>Conta vinculada</p>
      </>
    );
  }

  return (
    <div className="flex justify-between">
      <p>Vincular conta Spotify</p>
      <Link
        href={
          process.env.AUTHORIZATION_SPOTIFY
            ? process.env.AUTHORIZATION_SPOTIFY
            : ""
        }
      >
        <ExternalLink size={18} />
      </Link>
    </div>
  );
}
