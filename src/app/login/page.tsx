import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Login | Contato Inteligente",
  };
}

export default function Login() {
  return (
    <>
      <Header desktopMenu={<Nav />} mobileMenu={<MobileNav />} />
      <main className="flex justify-center">
        <LoginForm />
      </main>
    </>
  );
}
