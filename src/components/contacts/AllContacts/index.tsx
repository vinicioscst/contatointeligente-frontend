"use client";

import Button from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import AddIcon from "@/components/icons/AddIcon";
import { UserContext } from "@/contexts/UserContext/UserContext";
import Link from "next/link";
import { useContext, useEffect } from "react";

function AllContacts() {
  const { getContacts, contacts } = useContext(UserContext);

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="w-full border bg-secondary-color/50 rounded-xl p-6 flex flex-col gap-4 items-center">
      {contacts?.length === 0 || contacts === null ? (
        <>
          <h6 className="text-lg xm:text-xl text-center">
            Você ainda não possui contatos
          </h6>
        </>
      ) : (
        <div className="w-full flex flex-col gap-2">
          {contacts?.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllContacts;
