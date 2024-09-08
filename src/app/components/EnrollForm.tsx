
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import CustomButton from "./CustomButton";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ім'я повинно містити не менше 2 символів.",
  }),
  email: z.string().email({
    message: "Введіть коректний email.",
  }),
  phone: z.string()
    .length(13, { message: "Номер телефону повинен бути у форматі +380" }),
  message: z.string()
})

export default function EnrollForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(async (response) => {
      if (response.status !== 200 && !response.ok) throw new Error();
      toast({
        title: "Ваша форма успішно відправлена.",
        description: "Ми зв'яжемося з вами найближчим часом.",
        duration: 5000,
      })
    })
      .catch(() => {
        toast({
          title: "Виникла помилка",
          description: "Будь ласка, спробуйте пізніше.",
          duration: 5000,
        })
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 max-md:px-0">

        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel className="p-base">Ім&apos;я</FormLabel>
            <FormControl>
              <Input className="p-base font-GillLight" placeholder="Ім'я" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel className="p-base">Email</FormLabel>
            <FormControl>
              <Input className="p-base font-GillLight" placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="phone" render={({ field }) => (
          <FormItem>
            <FormLabel className="p-base">Телефон</FormLabel>
            <FormControl>
              <Input className="p-base font-GillLight" placeholder="+380" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel className="p-base">Ваші запитання</FormLabel>
            <FormControl>
              <Textarea className="min-h-40 p-base font-GillLight" placeholder="Якщо у Вас є питання щодо курсу, залиште його тут" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <CustomButton as="button" type="submit" className="button w-full mt-4">Записатися</CustomButton>
      </form>
    </Form>
  );
}
