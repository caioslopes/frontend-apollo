import Image from "next/image";
import React from "react";

import img from "../../../../../../public/assets/default.jpg";

export default function CardPlaylist() {
  return (
    <div className="rounded-lg p-6 bg-[#f1f1f1] space-y-4">
      <Image className="rounded-md" src={img} alt="Imagem Padrão" />
      <div className="space-y-2">
        <p className="font-bold text-xl">Titulo playlist</p>
        <p className="text-base">Descrição playlist</p>
        <p className="font-bold text-sm">Publica/privada</p>
      </div>
    </div>
  );
}
