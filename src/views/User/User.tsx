"use client";
import { deleteAccessTokenFromCookies } from "@/auth/deleteAccessTokenFromCookies";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function User() {
  const router = useRouter();
  return (
    <div>
      <p className="font-bold">User home</p>
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
  );
}
