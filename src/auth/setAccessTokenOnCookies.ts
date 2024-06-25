"use server";
import { cookies } from "next/headers";

export async function setAccessTokenOnCookies(value: string, maxAge: number) {
  try {
    await Promise.all([
      cookies().set("accessToken", value, {
        maxAge: maxAge,
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
}
