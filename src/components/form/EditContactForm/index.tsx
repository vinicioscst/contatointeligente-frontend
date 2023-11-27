"use client";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserEdit, editUserSchema } from "@/schemas/user";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { TUserUpdate } from "@/contexts/UserContext/@types";
import Modal from "@/components/Modal/Modal";
import { TContactEdit, contactEditSchema } from "@/schemas/contacts";

interface IEditContactForm {
  isDisabled: boolean;
}

function EditContactForm({ isDisabled }: IEditContactForm) {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactEdit>({ resolver: zodResolver(contactEditSchema) });

  const { editContact, contact } = useContext(UserContext);

  const submit = (formData: TContactEdit) => {
    editContact(formData, contact?.id as string);
  };

  return (
    <>
      <div className="w-full max-w-5xl flex flex-col gap-8">
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
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300 disabled:bg-slate-200`}
              {...register("fullName")}
              disabled={isDisabled}
              defaultValue={contact?.fullName}
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
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300 disabled:bg-slate-200`}
              {...register("email")}
              disabled={isDisabled}
              defaultValue={contact?.email}
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
              className={`w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm font-inter placeholder-slate-400 focus:border-primary-color focus:ring-1 focus:ring-primary-color shadow-sm shadow-slate-300 disabled:bg-slate-200`}
              defaultValue={contact?.telephone}
              {...register("telephone")}
              disabled={isDisabled}
            />
            {errors.telephone && (
              <span
                className={`text-sm font-inter text-red-500 tracking-wider`}
              >
                {errors.telephone.message}
              </span>
            )}
          </div>

          {isDisabled === false && (
            <Button
              bgColor="bg-accent-color"
              textColor="text-background-color"
              type="submit"
              borderColor="outline-transparent"
            >
              Atualizar
            </Button>
          )}
          <Button
            bgColor="bg-red-500"
            textColor="text-background-color"
            type="button"
            borderColor="outline-transparent"
            clickEvent={() => setShowModal(true)}
          >
            Deletar contato
          </Button>
        </form>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} deletePerson="contact" contactId={contact?.id} />
      )}
    </>
  );
}

export default EditContactForm;
