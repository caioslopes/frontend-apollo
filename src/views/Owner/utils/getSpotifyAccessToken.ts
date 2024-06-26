import { setSpotifyAccessTokenOnCookies } from "@/auth/setSpotifyAccessTokenOnCookies";
import { fetcher } from "@/utils/fetcher";

type SpotifyResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};

export async function getSpotifyAccessToken(code: string, email: string) {
  try {
    const response = await fetcher<SpotifyResponse>(
      `${process.env.BASE_URL}auth/api`,
      {
        method: "POST",
        body: JSON.stringify({
          code,
          email,
        }),
      }
    );

    await Promise.all([
      setSpotifyAccessTokenOnCookies(
        response.access_token,
        response.expires_in
      ),
    ]);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
