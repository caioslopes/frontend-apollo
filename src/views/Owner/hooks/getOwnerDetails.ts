import { OwnerDto } from "@/@types/owner";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export function getOwnerDetails(email: string) {
  const { data, error, isLoading, mutate } = useSWR<OwnerDto, Error>(
    `${process.env.BASE_URL}owner/${email}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return { data, error, isLoading, mutate };
}
