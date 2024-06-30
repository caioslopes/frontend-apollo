import Image from "next/image";

import img from "../../../../../../public/assets/default.jpg";
import { MapPin, Users } from "lucide-react";

export default function CardEstablishment() {
  return (
    <div className="rounded-lg p-6  bg-gradient-to-b from-[#E11D48] to-[#A91435] space-y-4">
      <Image className="rounded-md" src={img} alt="Imagem Padrão" />
      <div className="text-center text-white space-y-2">
        <span className="text-sm">Você está em</span>
        <div className="flex justify-center items-center gap-2">
          <MapPin />
          <p className="font-bold text-2xl">Estabelecimento</p>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <span className="text-sm px-4 py-2 bg-white text-primary rounded-full">
          Tocando agora
        </span>
        <div className="px-4 py-2 bg-white text-primary rounded-full flex items-center gap-2 w-fit">
          <span className="text-sm ">20</span>
          <Users size={14} />
        </div>
      </div>
    </div>
  );
}
