import React from "react";
import TagGenre from "../TagGenre/TagGenre";
import DrawerGenres from "../DrawerGenres/DrawerGenres";

type Props = {
  title: string;
  description: string;
  genres: string[];
};

export default function CardGenres({ title, genres, description }: Props) {
  return (
    <div className="bg-[#f1f1f1] rounded-md p-6 space-y-4">
      <div>
        <p className="font-bold">{title}</p>
        <span>{description}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <TagGenre key={genre} name={genre} />
        ))}
        <DrawerGenres />
      </div>
    </div>
  );
}
