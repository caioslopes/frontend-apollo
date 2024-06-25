import { House, LayoutDashboard, Music } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="w-full flex justify-center fixed bottom-0 p-6">
      <div className="bg-primary text-white flex justify-between w-full p-6 rounded-lg">
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
    </div>
  );
}
