"use client";
import EditUserForm from "../form/EditUserForm";
import Button from "../Button";
import EditIcon from "../icons/EditIcon";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";

function EditUserContainer() {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <div className="flex flex-col xm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl leading-tight max-w-3xl underline">
          Configurações
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
      <EditUserForm isDisabled={isDisabled} />
    </>
  );
}

export default EditUserContainer;
