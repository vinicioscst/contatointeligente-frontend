"use client";
import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";

function RegisterForm() {
  interface IRegisterFormData {
    fullName?: string;
    email?: string;
    telephone?: string;
    password?: string;
    isAdmin?: boolean;
    avatar?: string | ArrayBuffer | null;
  }

  const [formData, setFormData] = useState<IRegisterFormData | null>();

  function handleData(e: React.ChangeEvent<HTMLInputElement>) {
    const data = { ...formData, [e.target.name]: e.target.value };
    setFormData(data);
  }

  function convertImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.addEventListener("load", async () => {
      const data = { ...formData, avatar: reader.result };
      setFormData(data);
    });

    reader.readAsDataURL(file);
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
      <h2 className='text-center sm:text-left text-2xl'>Cadastre-se</h2>
      <form className="flex flex-col gap-4" onSubmit={(e) => submit(e)}>
        <Input
          handleData={handleData}
          type="text"
          name="fullName"
          id="login_fullName"
          label="Nome completo"
        />
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
        <Input
          handleData={convertImage}
          type="file"
          name="avatar"
          id="login_avatar"
          label="Foto de perfil"
        />
        <Button bgColor="bg-accent-color" textColor="text-background-color" type="submit">Cadastre-se</Button>
      </form>
      <p className="text-center sm:text-left">
        Já possui conta?{" "}
        <Link href={"/login"}><span className="font-bold underline cursor-pointer">
          Faça login
        </span></Link>
      </p>
    </div>
  );
}

export default RegisterForm;
