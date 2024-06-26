import { OwnerDto } from "@/@types/owner";
import { fetcher } from "@/utils/fetcher";

export async function getOwnerDetails(email: string) {
  try {
    const response = await fetcher<OwnerDto>(
      `${process.env.BASE_URL}owner/${email}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
