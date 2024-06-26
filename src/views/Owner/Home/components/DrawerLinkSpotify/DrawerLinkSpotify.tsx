"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function DrawerLinkSpotify() {
  const [open, setOpen] = useState<boolean>(false);

  const openRef = useRef(true);

  if (openRef.current) {
    setTimeout(() => {
      setOpen(true);
      openRef.current = false;
    }, 1000);
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Vincular conta Spotify</DrawerTitle>
        </DrawerHeader>
        <div className="p-6 space-y-6">
          <p>Olá Joãozinho!</p>
          <p>
            Para que você possa utilizar a aplicação e suas funcionalidade é
            preciso vincular uma conta Spotify Premium.
          </p>
          <p>
            Nossa aplicação utiliza do Spotify para poder fornecer as músicas ao
            estabelecimento.
          </p>
          <Link
            className="text-[#0D6EFD] underline"
            target="_blank"
            href="/about"
          >
            Por que fazemos isso?
          </Link>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="text-primary border-primary" variant="outline">
              Cancelar
            </Button>
          </DrawerClose>
          <Button asChild>
            <Link
              className="flex gap-4"
              href={
                process.env.AUTHORIZATION_SPOTIFY
                  ? process.env.AUTHORIZATION_SPOTIFY
                  : ""
              }
            >
              Vincular
              <SquareArrowOutUpRight size={16} />
            </Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
