import RegisterForm from "@/components/RegisterForm";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Cadastro | Contato Inteligente",
  };
}

export default function Register() {
  return (
    <main className="flex justify-center">
      <RegisterForm />
    </main>
  );
}
