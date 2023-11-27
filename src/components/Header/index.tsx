"use client";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";

interface IHeaderProps {
  desktopMenu: React.ReactNode;
  mobileMenu: React.ReactNode;
  sendToHome: boolean;
}

const Header = ({ desktopMenu, mobileMenu, sendToHome }: IHeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary-color">
      <div className="flex gap-4 items-center justify-between w-full max-w-5xl p-4 my-0 mx-auto text-background-color">
        {sendToHome ? (
          <Link href={"/"}>
            <h5 className="text-xl leading-none font-bold select-none cursor-pointer">
              Contato Inteligente
            </h5>
          </Link>
        ) : (
          <h5 className="text-xl leading-none font-bold select-none">
            Contato Inteligente
          </h5>
        )}
        {desktopMenu}
        <div className="flex sm:hidden py-3" onClick={() => setOpen(!open)}>
          <MenuIcon size={21} stroke="rgb(245 247 249)" />
        </div>
      </div>
      {open === true && mobileMenu}
    </header>
  );
};

export default Header;
