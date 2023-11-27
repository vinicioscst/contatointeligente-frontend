import Header from "@/components/Header";
import LoginForm from "@/components/form/LoginForm";
import MobileNav from "@/components/navigation/MobileNav";
import Nav from "@/components/navigation/Nav";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Login | Contato Inteligente",
  };
}

export default function Login() {
  return (
    <>
      <Header
        desktopMenu={<Nav />}
        mobileMenu={<MobileNav />}
        sendToHome={true}
      />
      <main className="flex justify-center">
        <LoginForm />
      </main>
    </>
  );
}
