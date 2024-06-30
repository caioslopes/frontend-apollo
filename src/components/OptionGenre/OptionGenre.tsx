"user client";
import { useState } from "react";

type Props = {
  genre: string;
};

export function OptionGenre({ genre }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck(event: any) {
    setIsChecked(event.target.checked);
  }

  return (
    <div className="w-full flex">
      <label
        htmlFor={genre}
        className={`border p-6 w-full rounded-md ${
          isChecked
            ? "bg-primary text-white"
            : "bg-[#f9f9f9] text-primary border-[#d9d9d9]"
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
        <span className="font-bold capitalize text-lg">{genre}</span>
      </label>
    </div>
  );
}
