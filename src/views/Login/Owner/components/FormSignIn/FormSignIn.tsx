"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { fetcher } from "@/utils/fetcher";
import { setOwnerTokenOnCookies } from "@/auth/setOwnerTokenOnCookies";

const formSchema = z.object({
  establishmentId: z.string(),
  email: z.string(),
  password: z.string(),
});

export default function FormSignIn() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      establishmentId: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetcher(`${process.env.BASE_URL}auth/owner`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });
      /* console.log(response.email);
      console.log(response.token); */
      await Promise.all([setOwnerTokenOnCookies(response.token)]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="establishmentId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  className="h-14 rounded-full text-lg text-center"
                  placeholder="Código do estabelecimento"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="h-14 rounded-full text-lg text-center"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  className="h-14 rounded-full text-lg text-center"
                  placeholder="Senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="h-14 rounded-full w-full space-x-4" type="submit">
          <span className="text-lg">Acessar</span>
          <ArrowRight />
        </Button>
      </form>
    </Form>
  );
}
