import React, { Dispatch, SetStateAction, useState } from "react";
import { GenreCheckbox } from "./components/GenreCheckbox/GenreCheckbox";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/utils/fetcher";
import { setUserTokenOnCookies } from "@/auth/setUserTokenOnCookies";

type Props = {
  genres: string[];
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
};

export default function SelectGenres({ genres, user, setUser }: Props) {
  const [search, setSearch] = useState<string>("");

  function searchValues() {
    return genres.filter((genre) => genre.includes(search));
  }

  async function handleUserLogin() {
    try {
      const response = await fetcher(`${process.env.BASE_URL}auth/user`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      });
      /* console.log(response.userName);
      console.log(response.token); */
      await Promise.all([setUserTokenOnCookies(response.token)]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-6">
      <span className="text-lg font-bold text-center">
        Escolha seus gêneros musicais favoritos
      </span>
      <div className="mt-6 sticky top-10">
        <Input
          className="h-14 rounded-lg"
          placeholder="Buscar por gênero"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {searchValues().map((genre) => (
          <GenreCheckbox
            key={genre}
            genre={genre}
            user={user}
            setUser={setUser}
          />
        ))}
      </div>
      <Button
        className="h-14 rounded-full text-lg font-bold w-full sticky bottom-10"
        onClick={handleUserLogin}
      >
        <span>Finalizar</span>
        <Check />
      </Button>
    </div>
  );
}
