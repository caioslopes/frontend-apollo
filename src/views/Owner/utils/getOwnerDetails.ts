"use server";
import { OwnerDto } from "@/@types/owner";
import { cookies } from "next/headers";

export async function getOwnerDetails(email: string) {
  const accessToken = cookies().get("accessToken");
  try {
    const response = await fetch(`${process.env.BASE_URL}owner/${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken?.value}`,
      },
      method: "GET",
    });
    const data: OwnerDto = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
