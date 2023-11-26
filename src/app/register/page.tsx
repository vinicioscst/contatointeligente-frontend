import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import RegisterForm from "@/components/RegisterForm";
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
