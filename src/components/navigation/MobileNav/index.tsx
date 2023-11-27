"use client";
import Link from "next/link";
import Button from "../../Button";
import LoginIcon from "../../icons/LoginIcon";

const MobileNav = () => {
  return (
    <div className="p-4 block sm:hidden text-background-color">
      <nav className="flex flex-col items-center gap-6">
        <Link href={"#about-us"}>
          <li className="hover:text-accent-color cursor-pointer transition-colors">
            Sobre nós
          </li>
        </Link>
        <Link href={"/register"}>
          <li className="hover:text-accent-color cursor-pointer transition-colors">
            Cadastro
          </li>
        </Link>
        <Link href={"/login"}>
          <Button
            bgColor="bg-background-color"
            textColor="text-font-color"
            type="button"
            hasImage={true}
            borderColor="outline-transparent"
          >
            <LoginIcon stroke="#090d10" size={21} />
            Faça seu login
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
