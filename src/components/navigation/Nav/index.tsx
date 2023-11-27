"use client";
import Link from "next/link";
import Button from "../../Button";
import LoginIcon from "../../icons/LoginIcon";

const Nav = () => {
  return (
    <div className="hidden sm:block">
      <nav className="flex items-center gap-6">
        <Link href={"#about-us"}>
          <li className="hover:underline hover:text-background-color/80 underline-offset-4 cursor-pointer transition-all">
            Sobre nós
          </li>
        </Link>
        <Link href={"/register"}>
          <li className="hover:underline hover:text-background-color/80 underline-offset-4 cursor-pointer transition-all">
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

export default Nav;
