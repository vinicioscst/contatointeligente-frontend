'use client'
import { SetStateAction, useContext } from "react";
import Button from "../Button";
import { UserContext } from "@/contexts/UserContext/UserContext";

interface IModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  deletePerson: 'user' | 'contact';
  contactId?: string;
}

function Modal({setShowModal, deletePerson, contactId}: IModalProps) {
    const { deleteUser, deleteContact } = useContext(UserContext);


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-full max-w-md p-4">
          <div className="rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white">
              <h3 className="text-xl text-center py-5 px-3">{deletePerson === "user" ? "Deletar conta?" : "Deletar contato?"}</h3>

            <div className="w-full flex flex-wrap items-center justify-center gap-2 py-5 px-3 border-t border-slate-200">
              <Button
                bgColor="bg-transparent"
                borderColor="outline-accent-color"
                textColor="text-accent-color"
                type="button"
                clickEvent={() => setShowModal(false)}
              >
                Cancelar
              </Button>
              {deletePerson === "user" ? <Button
                bgColor="bg-accent-color"
                borderColor="outline-transparent"
                textColor="text-background-color"
                type="button"
                clickEvent={() => deleteUser()}
              >
                Confirmar
              </Button> : <Button
                bgColor="bg-accent-color"
                borderColor="outline-transparent"
                textColor="text-background-color"
                type="button"
                clickEvent={() => deleteContact(contactId as string)}
              >
                Confirmar
              </Button>}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
