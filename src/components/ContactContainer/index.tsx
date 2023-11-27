"use client";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { useContext, useEffect, useState } from "react";
import EditContactForm from "../form/EditContactForm";
import CloseIcon from "../icons/CloseIcon";
import EditIcon from "../icons/EditIcon";
import Button from "../Button";

interface IContactContainerProps {
  contactId: string;
}

function ContactContainer({ contactId }: IContactContainerProps) {
  const { getContact } = useContext(UserContext);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    getContact(contactId);
  }, []);

  return (
    <>
      <div className="flex flex-col xm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl leading-tight max-w-3xl underline">
          Contato
        </h2>
        <Button
          bgColor="bg-accent-color"
          borderColor="outline-transparent"
          textColor="text-background-color"
          hasImage={true}
          type="button"
          clickEvent={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? (
            <>
              <EditIcon size={21} stroke="#F5F7F9" />
              Editar
            </>
          ) : (
            <>
              <CloseIcon size={21} stroke="#F5F7F9" />
              Cancelar
            </>
          )}
        </Button>
      </div>
      <EditContactForm isDisabled={isDisabled} />
    </>
  );
}

export default ContactContainer;
