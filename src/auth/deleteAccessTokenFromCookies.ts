"use server";
import { cookies } from "next/headers";

export async function deleteAccessTokenFromCookies() {
  try {
    await Promise.all([cookies().delete("accessToken")]);
  } catch (error) {
    throw new Error("Erro ao remover o accessToken");
  }
}
