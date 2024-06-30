import { Trash } from "lucide-react";
import React from "react";

type Props = {
  name: string;
};

export default function TagGenre({ name }: Props) {
  return (
    <div className="flex gap-4 items-center bg-white px-4 py-2 rounded-md">
      {name} <Trash className="text-primary" size={14} />
    </div>
  );
}
