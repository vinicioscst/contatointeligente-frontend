import EditUserContainer from "@/components/EditUserContainer";
import Header from "@/components/Header";
import DashboardNav from "@/components/navigation/DashboardNav";
import MobileDashboardNav from "@/components/navigation/MobileDashboardNav";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Configurações | Contato Inteligente",
  };
}

export default function Settings() {
  return (
    <>
      <Header
        desktopMenu={<DashboardNav />}
        mobileMenu={<MobileDashboardNav />}
        sendToHome={false}
      />
      <main className="flex justify-center">
        <section className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
          <EditUserContainer />
        </section>
      </main>
    </>
  );
}
