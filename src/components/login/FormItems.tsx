"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import Form from 'next/form'

type FormValues = {
  email: string;
  password: string;
};

export default function FormItems() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    signIn("credentials", {
      callbackUrl: "/home", 
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <Form
        action="/api/auth/callback/credentials"
        onSubmit={handleSubmit(onSubmit)}
        className="items-center gap-5 justify-center w-full flex flex-col"
      >
        <label
          htmlFor="email"
          className="ml-1 text-xl flex flex-col justify-center gap-1 w-full"
        >
          <p className="ml-1">E-mail</p>
          <Input
            {...register("email")}
            type="email"
            customSize="md"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label
          htmlFor="senha"
          className="ml-1 text-xl flex flex-col justify-center gap-1 w-full"
        >
          <p className="ml-1">Senha</p>
          <Input
            {...register("password")}
            type="password"
            customSize="md"
            id="senha"
            placeholder="Digite sua senha"
          />
        </label>

        <button
          type="submit"
          className="mt-6 bg-green-500 text-primary rounded-md w-full h-14 font-bold hover:bg-green-600"
        >
          Entrar
        </button>
      </Form>
    </>
  );
}
