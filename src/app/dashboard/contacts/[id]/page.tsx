import ContactContainer from "@/components/ContactContainer";
import Header from "@/components/Header";
import DashboardNav from "@/components/navigation/DashboardNav";
import MobileDashboardNav from "@/components/navigation/MobileDashboardNav";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Informações do contato | Contato Inteligente",
  };
}

function Contact({ params }: { params: { id: string } }) {
  return (
    <>
      <Header
        desktopMenu={<DashboardNav />}
        mobileMenu={<MobileDashboardNav />}
        sendToHome={true}
      />
      <main className="flex justify-center">
      <section className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
        <ContactContainer contactId={params.id} />
    </section>
      </main>
    </>
  );
}

export default Contact;
