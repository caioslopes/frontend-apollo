"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Headphones } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Steps } from "../../UserLogin";

const FormSchema = z.object({
  username: z.string(),
});

type Props = {
  setStep: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<any>>;
};

export function FormUser({ setStep, setUser }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setUser((prev: any) => ({ ...prev, username: data.username }));
    setStep(Steps.THIRD);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-14 rounded-full text-lg text-center"
                  placeholder="Digite um nome de usuário"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="h-14 rounded-full w-full space-x-4" type="submit">
          <span className="text-lg">Particiar</span>
          <Headphones />
        </Button>
      </form>
    </Form>
  );
}
