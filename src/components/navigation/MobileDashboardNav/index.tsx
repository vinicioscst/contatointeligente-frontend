"use client";
import Button from "../../Button";
import HomeIcon from "@/components/icons/HomeIcon";
import ContactsIcon from "@/components/icons/ContactsIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { useRouter } from "next/navigation";


const MobileDashboardNav = () => {
  const { logoutUser } = useContext(UserContext);
  const router = useRouter()

  return (
    <div className="p-4 block sm:hidden text-background-color">
      <nav className="flex flex-col items-center gap-6">
        <div onClick={() => router.push('/dashboard')} title="Visão Geral">
          <Button
            bgColor="bg-transparent"
            textColor="text-background-color"
            type="button"
            hasImage={true}
            borderColor="outline-background-color"
          >
            <HomeIcon stroke="#f5f7f9" size={21} />
            Visão Geral
          </Button>
        </div>

        <div onClick={() => router.push('/dashboard/contacts')} title="Meus Contatos">
          <Button
            bgColor="bg-transparent"
            textColor="text-background-color"
            type="button"
            hasImage={true}
            borderColor="outline-background-color"
          >
            <ContactsIcon stroke="#f5f7f9" size={21} />
            Meus Contatos
          </Button>
        </div>

        <div onClick={() => router.push('/dashboard/settings')} title="Configurações">
          <Button
            bgColor="bg-transparent"
            textColor="text-background-color"
            type="button"
            hasImage={true}
            borderColor="outline-background-color"
          >
            <SettingsIcon stroke="#f5f7f9" size={21} />
            Configurações
          </Button>
        </div>

        <div onClick={logoutUser}>
          <Button
            bgColor="bg-background-color"
            textColor="text-font-color"
            type="button"
            hasImage={true}
            borderColor="outline-transparent"
          >
            <LogoutIcon stroke="#090d10" size={21} />
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileDashboardNav;
