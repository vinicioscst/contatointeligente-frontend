import LoginForm from "@/components/LoginForm";
import { Metadata, ResolvingMetadata } from "next";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Login | Contato Inteligente",
  };
}

export default function Login() {
  return (
    <>
      <main className="flex justify-center">
        <LoginForm />
      </main>
    </>
  );
}
