"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Check, CirclePlus } from "lucide-react";
import { genresMocked } from "@/utils/genres";
import { OptionGenre } from "../OptionGenre/OptionGenre";
import { Input } from "../ui/input";

export default function DrawerGenres() {
  return (
    <Drawer>
      <DrawerTrigger>
        <CirclePlus size={18} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Escolher gêneros</DrawerTitle>
        </DrawerHeader>
        <div className="p-6">
          <Input placeholder="Buscar gênero" />
        </div>
        <div className="p-6 h-96 overflow-auto">
          <div className="grid grid-cols-2 gap-4">
            {genresMocked.map((genre) => (
              <OptionGenre genre={genre} />
            ))}
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="text-primary border-primary" variant="outline">
              Cancelar
            </Button>
          </DrawerClose>
          <Button>
            Finalizar <Check size={18} />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
