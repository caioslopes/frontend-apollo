import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";
import Image from "next/image";
import React from "react";

import img from "../../../../../../public/assets/default.jpg";

export default function EstablishmentCard() {
  return (
    <div className="w-full bg-[#f1f1f1] flex items-center justify-between p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-md"
          width={100}
          height={100}
          src={img}
          alt="Imagem Padrão"
        />
        <div>
          <p className="font-bold text-lg text-primary">Zinho</p>
          <span className="bg-[#d9d9d9] text-primary text-xs px-2 rounded-full">
            Não configurado
          </span>
        </div>
      </div>
      <Button variant="ghost">
        <Power className="text-primary" size={32} />
      </Button>
    </div>
  );
}
