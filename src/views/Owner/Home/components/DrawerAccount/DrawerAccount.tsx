"use client";
import React from "react";
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

export default function DrawerAccount() {
  const router = useRouter();

  return (
    <Drawer>
      <DrawerTrigger>
        <User />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Perfil</DrawerTitle>
          <DrawerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-6 space-y-8">
          <div>
            <p className="font-bold">Informações da conta</p>
            <p>Joãozinho</p>
          </div>
          <div>
            <p className="font-bold">Spotify</p>
            <div className="flex justify-between">
              <p>Vincular conta Spotify</p>
              <Link href="https://accounts.spotify.com/pt-BR/authorize?response_type=code&scope=user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public&client_id=d5efeedcdd7f41f8a323384fcd81f2be&redirect_uri=http://localhost:3000/owner/home">
                <ExternalLink size={18} />
              </Link>
            </div>
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
