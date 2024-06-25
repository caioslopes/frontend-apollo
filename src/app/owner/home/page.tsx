import Home from "@/views/Owner/Home/Home";
import React from "react";

type Props = {
  searchParams: {
    code: string;
  };
};

export default function page({ searchParams }: Props) {
  const { code } = searchParams;

  const params = {
    code: code ? code : "",
  };

  return <Home params={params} />;
}
