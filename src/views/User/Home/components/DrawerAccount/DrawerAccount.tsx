import { deleteAccessTokenFromCookies } from "@/auth/deleteAccessTokenFromCookies";
import { Button } from "@/components/ui/button";
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
import { LogOut, User } from "lucide-react";
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
        </DrawerHeader>
        <div className="p-6 space-y-8">
          <div>
            <p className="font-bold">Informações da conta</p>
            <p>Username</p>
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
            <Button variant="secondary">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
