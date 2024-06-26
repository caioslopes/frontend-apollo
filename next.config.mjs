/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    /* BASE_URL: "https://api.apollomusic.com.br", */
    /* BASE_URL: "http://localhost:8080/", */
    BASE_URL: "http://192.168.1.104:8080/",
    AUTHORIZATION_SPOTIFY:
      "https://accounts.spotify.com/pt-BR/authorize?response_type=code&scope=user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public&client_id=d5efeedcdd7f41f8a323384fcd81f2be&redirect_uri=http://localhost:3000/owner/home",
  },
};

export default nextConfig;
