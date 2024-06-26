import React from "react";
import CardPlaylist from "./components/CardPlaylist/CardPlaylist";
import CardGenres from "@/components/CardGenres/CardGenres";

const genres = ["funk", "pop", "rock"];

export default function Playlist() {
  /* const { data, error, isLoading, mutate } = getPlaylistDetails() */
  // Tanto spotify quanto nossa api

  return (
    <div className="space-y-8">
      <CardPlaylist />
      <CardGenres
        title="Gêneros padrão"
        description="lorem ipsum"
        genres={genres}
      />
      <CardGenres
        title="Gêneros bloqueados"
        description="lorem ipsum"
        genres={genres}
      />
    </div>
  );
}
