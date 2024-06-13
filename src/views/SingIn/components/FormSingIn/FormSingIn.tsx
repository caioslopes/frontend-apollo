"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  establishmentCode: z.string(),
  username: z.string(),
  password: z.string(),
});

export default function FormSingIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      establishmentCode: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-center flex-col gap-8 text-white"
      >
        <div className="flex justify-center">
          <span className="font-medium text-2xl">Apollo Music</span>
        </div>
        <FormField
          control={form.control}
          name="establishmentCode"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Código do estabelecimento</FormLabel> */}
              <FormControl>
                <Input placeholder="Código do estabelecimento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Usuário</FormLabel> */}
              <FormControl>
                <Input placeholder="Usuário" {...field} />
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
              {/* <FormLabel>Senha</FormLabel> */}
              <FormControl>
                <Input placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-80" type="submit">
          Acessar
        </Button>
      </form>
    </Form>
  );
}
