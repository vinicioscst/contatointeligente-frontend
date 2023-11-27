import Button from "@/components/Button";
import Header from "@/components/Header";
import AllContacts from "@/components/contacts/AllContacts";
import AddIcon from "@/components/icons/AddIcon";
import DashboardNav from "@/components/navigation/DashboardNav";
import MobileDashboardNav from "@/components/navigation/MobileDashboardNav";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Meus Contatos | Contato Inteligente",
  };
}

export default function Contacts() {
  return (
    <>
      <Header
        desktopMenu={<DashboardNav />}
        mobileMenu={<MobileDashboardNav />}
        sendToHome={false}
      />
      <main className="flex justify-center">
        <section className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
          <div className="flex flex-col xm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl leading-tight max-w-3xl underline">
              Meus Contatos
            </h2>
            <Link href={"/dashboard/contacts/add"}>
              <Button
                bgColor="bg-accent-color"
                borderColor="outline-transparent"
                textColor="text-background-color"
                hasImage={true}
                type="button"
              >
                <AddIcon size={21} stroke="#F5F7F9" />
                Adicionar
              </Button>
            </Link>
          </div>
          <AllContacts />
        </section>
      </main>
    </>
  );
}
