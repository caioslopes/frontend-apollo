"use server";
import { cookies } from "next/headers";

export async function setUserTokenOnCookies(value: string) {
  try {
    await Promise.all([
      cookies().set("userToken", value, {
        maxAge: 2 * 60 * 60,
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
}
