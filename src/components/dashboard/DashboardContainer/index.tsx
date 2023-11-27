"use client";

import Header from "@/components/Header";
import DashboardNav from "@/components/navigation/DashboardNav";
import MobileDashboardNav from "@/components/navigation/MobileDashboardNav";
import { useContext, useEffect } from "react";
import DashboardHome from "../DashboardHome";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { TLoginReturn } from "@/contexts/UserContext/@types";

const DashboardContainer = () => {
  const { setLoginData } = useContext(UserContext);

  useEffect(() => {
    const data: TLoginReturn = {
      user: JSON.parse(localStorage.getItem("CI@USER") || ""),
      token: localStorage.getItem("CI@TOKEN") || "",
    };
    setLoginData(data);
  }, []);

  return (
    <>
      <Header
        desktopMenu={<DashboardNav />}
        mobileMenu={<MobileDashboardNav />}
        sendToHome={false}
      />
      <main className="flex justify-center">
        <DashboardHome />
      </main>
    </>
  );
};

export default DashboardContainer;
