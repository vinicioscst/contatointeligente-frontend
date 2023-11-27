import Header from "@/components/Header";
import AddContactForm from "@/components/form/AddContactForm";
import DashboardNav from "@/components/navigation/DashboardNav";
import MobileDashboardNav from "@/components/navigation/MobileDashboardNav";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Adicionar Contato | Contato Inteligente",
  };
}

export default function AddContacts() {
  return (
    <>
      <Header
        desktopMenu={<DashboardNav />}
        mobileMenu={<MobileDashboardNav />}
        sendToHome={true}
      />
      <main className="flex justify-center">
        <AddContactForm />
      </main>
    </>
  );
}
