"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ExternalLink, LogOut, User } from "lucide-react";
import Link from "next/link";
import { deleteAccessTokenFromCookies } from "@/auth/deleteAccessTokenFromCookies";
import { useRouter } from "next/navigation";
import { OwnerDto } from "@/@types/owner";
import SpotifyStatus from "./components/SpotifyStatus/SpotifyStatus";

type Props = {
  owner: OwnerDto;
};

export default function DrawerAccount({ owner }: Props) {
  const router = useRouter();
  const hasAuthorizationCode = owner.refreshToken ? true : false;

  return (
    <Drawer>
      <DrawerTrigger>
        <User />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Perfil</DrawerTitle>
        </DrawerHeader>
        <div className="p-6 space-y-8">
          <div>
            <p className="font-bold">Informações da conta</p>
            <p>{owner.name}</p>
          </div>
          <div>
            <p className="font-bold">Spotify</p>
            <SpotifyStatus hasAuthorizationCode={hasAuthorizationCode} />
          </div>
          <div className="flex justify-between">
            Sair
            <Button
              className="p-0"
              variant="ghost"
              onClick={async () => {
                await deleteAccessTokenFromCookies();
                router.push("/");
              }}
            >
              <LogOut className="text-primary" size={18} />
            </Button>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="h-14 rounded-full" variant="secondary">
              Fechar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
