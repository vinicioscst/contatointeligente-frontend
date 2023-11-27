import { TLoginReturn } from "@/contexts/UserContext/@types";
import DashboardResume from "../DashboardResume";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";

const DashboardHome = () => {
  const { loginData } = useContext(UserContext);

  return (
    <section className="w-full max-w-5xl flex flex-col gap-8 py-20 px-4">
      <h2 className="text-2xl sm:text-3xl leading-tight max-w-3xl">
        Olá, <span className="underline">{loginData?.user.fullName}</span>
      </h2>
      <DashboardResume />
    </section>
  );
};

export default DashboardHome;
