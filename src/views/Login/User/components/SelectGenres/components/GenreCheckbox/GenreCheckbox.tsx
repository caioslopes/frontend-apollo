import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  genre: string;
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
};

export function GenreCheckbox({ genre, user, setUser }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck(event: any) {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      if (user.genres.length === 3) return setIsChecked(false);
      setUser((prev: any) => ({ ...prev, genres: [...prev.genres, genre] }));
    } else
      setUser((prev: any) => ({
        ...prev,
        genres: prev.genres.filter((item: any) => item !== genre),
      }));
  }

  return (
    <div className="w-full flex">
      <label
        htmlFor={genre}
        className={`bg-[#f9f9f9] border border-[#d9d9d9] p-6 w-full rounded-md ${
          isChecked && "border-primary"
        }`}
      >
        <input
          className="opacity-0 absolute"
          type="checkbox"
          name="genre"
          id={genre}
          checked={isChecked}
          onChange={handleCheck}
        />
        <span className="text-primary font-bold capitalize text-lg">
          {genre}
        </span>
      </label>
    </div>
  );
}
