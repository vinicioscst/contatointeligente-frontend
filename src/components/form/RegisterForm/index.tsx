"use client";
import Button from "../../Button";
import Link from "next/link";
import { api } from "@/config/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserRegister, userRegisterSchema } from "@/schemas/user";
import { useState } from "react";

function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRegister>({ resolver: zodResolver(userRegisterSchema) });

  const [tel, setTel] = useState("");

  function maskTelephone(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    setTel(value);
  }

  const submit = async (formData: TUserRegister) => {
    await api
      .post("users", formData)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
        <h2 className="text-center sm:text-left text-2xl">Cadastre-se</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <div>
            <label htmlFor="login_fullName">Nome completo</label>
            <input
              type="text"
              id="login_fullName"
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300`}
              {...register("fullName")}
            />
            {errors.fullName && (
              <span
                className={`text-sm font-inter text-red-500 tracking-wider`}
              >
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="login_email">Email</label>
            <input
              type="email"
              id="login_email"
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300`}
              {...register("email")}
            />
            {errors.email && (
              <span
                className={`text-sm font-inter text-red-500 tracking-wider`}
              >
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="login_telephone">Telefone</label>
            <input
              type="tel"
              id="login_telephone"
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300`}
              value={tel}
              {...register("telephone")}
              onChange={maskTelephone}
            />
            {errors.telephone && (
              <span
                className={`text-sm font-inter text-red-500 tracking-wider`}
              >
                {errors.telephone.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="login_password">Senha</label>
            <input
              type="password"
              id="login_password"
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300`}
              {...register("password")}
            />
            {errors.password && (
              <span
                className={`text-sm font-inter text-red-500 tracking-wider`}
              >
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="login_avatar">Imagem de perfil</label>
            <input
              type="text"
              id="login_avatar"
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300`}
              {...register("avatar")}
            />
            <span
              className={`text-sm font-inter tracking-wider text-primary-color`}
            >
              Você pode hospedar sua foto de perfil em sites como o{" "}
              <a href="https://imgur.com" className="underline">
                Imgur
              </a>
              .
            </span>
          </div>
          <Button
            bgColor="bg-accent-color"
            textColor="text-background-color"
            type="submit"
          >
            Cadastre-se
          </Button>
        </form>
        <p className="text-center sm:text-left">
          Já possui conta?{" "}
          <Link href={"/login"}>
            <span className="font-bold underline cursor-pointer">
              Faça login
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegisterForm;
