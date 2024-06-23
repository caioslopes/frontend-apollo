import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Bottom({ title, children }: Props) {
  return (
    <section className="p-6 rounded-t-3xl bg-white h-80 flex flex-col gap-4 justify-center">
      <p className="text-xl font-bold text-primary text-center">{title}</p>
      {children}
    </section>
  );
}
