import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apollo Music",
};

export default function page() {
  return (
    <div className="min-h-screen bg-singIn">
      <div className="w-full h-dvh flex justify-center items-center">
        <div>
          <h1 className="font-medium text-3xl text-primary">Apollo Music</h1>
          <div className="flex gap-4 mt-4">
            <Link
              className="w-full text-center bg-secondary p-2 rounded-sm"
              href="/user/estabelecimento"
            >
              User
            </Link>
            <Link
              className="w-full text-center bg-primary p-2 rounded-sm"
              href="/owner/login"
            >
              Owner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
