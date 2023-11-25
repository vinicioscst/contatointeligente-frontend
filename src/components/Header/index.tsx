"use client";
import Link from "next/link";
import Nav from "../Nav";
import { useState } from "react";
import MobileNav from "../MobileNav";
import MenuIcon from "../icons/MenuIcon";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary-color">
      <div className="flex gap-4 items-center justify-between w-full max-w-5xl p-4 my-0 mx-auto text-background-color">
        <Link href={"/"}>
          <h5 className="text-xl leading-none font-bold hover:tracking-wide select-none cursor-pointer transition-all">
            Contato Inteligente
          </h5>
        </Link>
        <Nav />
        <div className="flex sm:hidden py-3" onClick={() => setOpen(!open)}>
          <MenuIcon size={21} stroke="rgb(245 247 249)"/>
        </div>
      </div>
      {open === true && <MobileNav />}
    </header>
  );
};

export default Header;
