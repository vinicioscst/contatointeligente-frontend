"use client";
import { useContext, useEffect } from "react";
import Button from "@/components/Button";
import AddIcon from "@/components/icons/AddIcon";
import Link from "next/link";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { TLoginReturn } from "@/contexts/UserContext/@types";
import ContactCard from "@/components/ContactCard";

const DashboardResume = () => {
  const { getContacts, contacts } = useContext(UserContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <h4 className="text-xl sm:text-2xl">Resumo</h4>
      <div className="w-full flex gap-4">
        <div className="w-full border bg-secondary-color/50 rounded-xl p-6 flex flex-col gap-4 items-center">
          {contacts?.length === 0 || contacts === null ? (
            <>
              <h6 className="text-lg xm:text-xl text-center">
                Você ainda não possui contatos
              </h6>
              <Link href={"dashboard/contacts/add"}>
                <Button
                  bgColor="bg-background-color"
                  borderColor="outline-transparent"
                  textColor="text-font-color"
                  hasImage={true}
                  type="button"
                >
                  <AddIcon size={21} stroke="#090D10" />
                  Adicionar
                </Button>
              </Link>
            </>
          ) : (
            <>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
                <h6 className="underline text-lg xm:text-xl text-center">
                  Últimos contatos
                </h6>
                <Link href={"dashboard/contacts/add"}>
                  <Button
                    bgColor="bg-background-color"
                    borderColor="outline-transparent"
                    textColor="text-font-color"
                    hasImage={true}
                    type="button"
                  >
                    <AddIcon size={21} stroke="#090D10" />
                    Adicionar
                  </Button>
                </Link>
              </div>

              <div className="w-full flex flex-col gap-2">
                {contacts?.toReversed().slice(0, 3).map((contact) => (
                  <ContactCard key={contact.id} contact={contact} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardResume;
