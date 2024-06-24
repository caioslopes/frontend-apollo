"use server";
import { cookies } from "next/headers";

export async function setOwnerTokenOnCookies(value: string) {
  try {
    await Promise.all([
      cookies().set("ownerToken", value, {
        maxAge: 20 * 60 * 60,
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
}
