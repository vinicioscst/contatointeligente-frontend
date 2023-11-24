"use client";
import { useState } from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

function RightColumn() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <section className="flex flex-col gap-3 flex-grow basis-96 items-center justify-center min-h-[90vh] px-20 bg-slate-50">
      {tab === "login" ? (
        <LoginForm setTab={setTab} />
      ) : (
        <RegisterForm setTab={setTab} />
      )}
    </section>
  );
}

export default RightColumn;
