import React from "react";

import { Button } from "@/components/ui/button";
import { CircleAlert, Settings } from "lucide-react";
import Image from "next/image";

import img from "../../../../../../public/assets/default.jpg";
import Link from "next/link";

type Props = {
  hasAuthorizationCode: boolean;
};

export default function CardPlaylist({ hasAuthorizationCode }: Props) {
  /* const {data, error, isLoading, mutate} = getOwnerPlaylist(); */

  if (hasAuthorizationCode) {
    return (
      <div className="rounded-lg p-6 bg-[#f1f1f1] space-y-4">
        <Image className="rounded-md" src={img} alt="Imagem Padrão" />
        <div className="space-y-2">
          <p className="font-bold text-xl">Titulo playlist</p>
          <p className="text-base">Descrição playlist</p>
          <p className="font-bold text-sm">Publica/privada</p>
        </div>
        <div className="w-full flex justify-end">
          <Button variant="secondary" className="flex gap-2 bg-white" asChild>
            <Link href="playlist">
              Configurar <Settings size={18} />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg p-6 bg-gradient-to-r from-[#f1f1f1] to-[#D1D1D1] space-y-4">
      <div className="bg-gradient-to-r from-[#D9D9D9] to-[#999595] rounded-md p-6 flex flex-col gap-4 items-center">
        <CircleAlert className="text-[#646159]" size={60} />
        <p className="font-bold text-xl text-center text-[#6B6A69]">
          Sua conta não possui <br /> vinculo com o Spotify
        </p>
        <p className="text-justify text-[#7B7B7B]">
          Para que você possa utilizar a aplicação e suas funcionalidade é
          preciso vincular uma conta Spotify Premium.
        </p>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full rounded-full bg-gradient-to-r from-[#D9D9D9] to-[#999595]"></div>
        <div className="h-4 w-full rounded-full bg-gradient-to-r from-[#D9D9D9] to-[#999595]"></div>
        <div className="h-4 w-[80px] rounded-full bg-gradient-to-r from-[#D9D9D9] to-[#999595]"></div>
      </div>
    </div>
  );
}
