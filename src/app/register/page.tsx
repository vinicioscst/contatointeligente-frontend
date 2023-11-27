import Header from "@/components/Header";
import MobileNav from "@/components/navigation/MobileNav";
import Nav from "@/components/navigation/Nav";
import RegisterForm from "@/components/form/RegisterForm";
import { Metadata, ResolvingMetadata } from "next";
import Footer from "@/components/Footer";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Cadastro | Contato Inteligente",
  };
}

export default function Register() {
  return (
    <div className="flex flex-col justify-between">
      <Header
        desktopMenu={<Nav />}
        mobileMenu={<MobileNav />}
        sendToHome={true}
      />
      <main className="flex justify-center">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}
