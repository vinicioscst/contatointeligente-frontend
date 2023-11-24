"use client";
import { abrilFatface } from "@/app/layout";
import { useState } from "react";

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

  return (
    <div className="w-full max-w-[26.875rem]">
      <h2 className={`${abrilFatface.className} text-2xl`}>
        Faça login em sua conta
      </h2>
      <form>
        <label htmlFor="login_email">Email</label>
        <input
          type="email"
          name="email"
          id="login_email"
          className="w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 shadow-sm shadow-slate-300"
          onChange={(e) => handleData(e)}
        />
        <label htmlFor="login_password">Senha</label>
        <input
          type="password"
          name="password"
          id="login_password"
          className="w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 shadow-sm shadow-slate-300"
          onChange={(e) => handleData(e)}
        />
        <button type="submit">Fazer login</button>
      </form>

      <p>
        Ainda não possui conta?{" "}
        <span className="font-bold underline cursor-pointer" onClick={() => setTab("register")}>Registre-se aqui</span>
      </p>
    </div>
  );
}

export default LoginForm;
