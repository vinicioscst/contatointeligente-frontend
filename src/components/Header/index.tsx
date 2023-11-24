import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-text-color/20">
      <div className="flex justify-between w-full max-w-5xl p-6 my-0 mx-auto">
        <Link href={"/"}><h5 className="text-xl font-bold text-accent-color hover:text-primary-color select-none cursor-pointer transition-colors">Contato Inteligente</h5></Link>
        <nav className="flex items-center gap-6 ">
          <Link href={"#about-us"}><li className="cursor-pointer">Sobre nós</li></Link>
          <Link href={"/register"}><li className="cursor-pointer">Cadastro</li></Link>
          <Link href={"/login"}><li className="cursor-pointer">Faça seu login</li></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
