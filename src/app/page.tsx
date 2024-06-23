import Index from "@/views/Index/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Music",
};

export default function page() {
  return <Index />;
}
