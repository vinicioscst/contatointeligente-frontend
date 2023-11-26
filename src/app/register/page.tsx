import Header from "@/components/Header";
import MobileNav from "@/components/navigation/MobileNav";
import Nav from "@/components/navigation/Nav";
import RegisterForm from "@/components/form/RegisterForm";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Cadastro | Contato Inteligente",
  };
}

export default function Register() {
  return (
    <>
      <Header desktopMenu={<Nav />} mobileMenu={<MobileNav />} />
      <main className="flex justify-center">
        <RegisterForm />
      </main>
    </>
  );
}
