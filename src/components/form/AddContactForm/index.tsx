"use client";
import Button from "@/components/Button";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { TContactCreate, contactCreateSchema } from "@/schemas/contacts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

function AddContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactCreate>({ resolver: zodResolver(contactCreateSchema) });

  const [tel, setTel] = useState("");

  function maskTelephone(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    setTel(value);
  }

  const { createContact } = useContext(UserContext);

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
      <h2 className="text-center sm:text-left text-2xl">
        Adicione um contato
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(createContact)}
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
            <span className={`text-sm font-inter text-red-500 tracking-wider`}>
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
            <span className={`text-sm font-inter text-red-500 tracking-wider`}>
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
            <span className={`text-sm font-inter text-red-500 tracking-wider`}>
              {errors.telephone.message}
            </span>
          )}
        </div>

        <Button
          bgColor="bg-accent-color"
          textColor="text-background-color"
          type="submit"
          borderColor="outline-transparent"
        >
          Criar Contato
        </Button>
      </form>
    </div>
  );
}

export default AddContactForm;
