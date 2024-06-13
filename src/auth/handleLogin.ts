import { fetcher } from "@/utils/fetcher";

export async function handleLogin(fields: any) {
  try {
    const response = await fetcher<any>(`${process.env.BASE_URL}auth/login`, {
      method: "POST",
      body: JSON.stringify({
        establishmentCode: fields.establishmentCode,
        username: fields.username,
        password: fields.password,
      }),
    });
  } catch (error) {}
}
