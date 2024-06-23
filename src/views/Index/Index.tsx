"use client";
import Bottom from "@/components/Bottom/Bottom";
import Top from "@/components/Top/Top";
import { Button } from "@/components/ui/button";
import { Shield, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <main className="bg-primary flex flex-col h-screen">
      <Top />
      <Bottom title="Quem é você?">
        <Button className="h-14 rounded-full space-x-4" asChild>
          <Link href="login/user">
            <span className="text-lg">Usuário</span>
            <User />
          </Link>
        </Button>
        <Button
          className="h-14 rounded-full text-primary focus:text-primary border-primary space-x-4"
          variant="outline"
          asChild
        >
          <Link href="login/owner">
            <span className="text-lg">Proprietário</span>
            <Shield />
          </Link>
        </Button>
      </Bottom>
    </main>
  );
}
