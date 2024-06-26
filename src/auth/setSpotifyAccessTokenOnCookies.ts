"use server";
import { cookies } from "next/headers";

export async function setSpotifyAccessTokenOnCookies(
  value: string,
  maxAge: number
) {
  try {
    await Promise.all([
      cookies().set("spotify_accessToken", value, {
        maxAge: maxAge,
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
}
