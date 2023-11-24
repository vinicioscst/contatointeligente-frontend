"use client";
import { abrilFatface } from "@/app/layout";
import { useState } from "react";
import Input from "../Input";

interface IRegisterFormProps {
  setTab: (value: "login" | "register") => void;
}

interface IRegisterFormData {
  fullName?: string;
  email?: string;
  telephone?: string;
  password?: string;
  isAdmin?: boolean;
  avatar?: string | ArrayBuffer | null;
}

function RegisterForm({ setTab }: IRegisterFormProps) {
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

  return (
    <div>
      {formData?.avatar && <img src={formData?.avatar as string} alt="" />}
      <h2 className={`${abrilFatface.className} text-2xl`}>Cadastre-se</h2>
      <form>
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
        <button type="submit">Fazer login</button>
      </form>
      <p>
        Já possui conta?{" "}
        <span
          className="font-bold underline cursor-pointer"
          onClick={() => setTab("login")}
        >
          Faça login
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
