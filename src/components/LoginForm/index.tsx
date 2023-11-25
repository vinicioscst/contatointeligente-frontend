"use client";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { api } from "@/config/axios";

interface IRegisterFormProps {
  setTab: (value: "login" | "register") => void;
}

interface ILoginFormData {
  email?: string;
  password?: string;
}

function LoginForm({ setTab }: IRegisterFormProps) {
  const [formData, setFormData] = useState<ILoginFormData | null>();

  function handleData(e: React.ChangeEvent<HTMLInputElement>) {
    const data = { ...formData, [e.target.name]: e.target.value };
    setFormData(data);
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
      <h2 className='text-center sm:text-left text-2xl'>
        Faça login em sua conta
      </h2>
      <form className="flex flex-col gap-4" onSubmit={(e) => submit(e)}>
        <Input
          handleData={handleData}
          type="email"
          name="email"
          id="login_email"
          label="Email"
        />
        <Input
          handleData={handleData}
          type="tel"
          name="telephone"
          id="login_telephone"
          label="Telefone"
        />
        <Input
          handleData={handleData}
          type="password"
          name="password"
          id="login_password"
          label="Senha"
        />
        <Button bgColor="bg-accent-color" textColor="text-background-color" type="submit">Fazer Login</Button>
      </form>

      <p>
        Ainda não possui conta?{" "}
        <span
          className="font-bold underline cursor-pointer"
          onClick={() => setTab("register")}
        >
          Registre-se aqui
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
