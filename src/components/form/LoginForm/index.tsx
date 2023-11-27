"use client";
import Button from "../../Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserLogin, userLoginSchema } from "@/schemas/user";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserLogin>({ resolver: zodResolver(userLoginSchema) });

  const { loginUser } = useContext(UserContext);

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
      <h2 className="text-center sm:text-left text-2xl">
        Faça login em sua conta
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(loginUser)}
        noValidate
      >
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
        <Button
          bgColor="bg-accent-color"
          textColor="text-background-color"
          type="submit"
          borderColor="outline-transparent"
        >
          Fazer Login
        </Button>
      </form>

      <p>
        Ainda não possui conta?{" "}
        <Link href={"/register"}>
          <span className="font-bold underline cursor-pointer">
            Registre-se aqui
          </span>
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
