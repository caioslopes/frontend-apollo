import { House, LayoutDashboard, Music } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="fixed bottom-0 bg-primary text-white flex justify-between w-full p-6">
      <Link href="dashboard">
        <LayoutDashboard />
      </Link>
      <Link href="home">
        <House />
      </Link>
      <Link href="player">
        <Music />
      </Link>
    </div>
  );
}
