import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-text-color/20">
      <div className="flex justify-between w-full max-w-5xl p-6 my-0 mx-auto">
        <Link href={"/"}><h5 className="text-xl font-bold hover:text-accent-color select-none cursor-pointer transition-colors">Contato Inteligente</h5></Link>
        <nav className="flex items-center gap-6 ">
          <Link href={"#about-us"}><li className="hover:text-accent-color cursor-pointer transition-colors">Sobre nós</li></Link>
          <Link href={"/register"}><li className="hover:text-accent-color cursor-pointer transition-colors">Cadastro</li></Link>
          <Link href={"/login"}><li className="bg-primary-color hover:bg-accent-color py-2 px-4 rounded-md text-background-color hover:text-secondary-color cursor-pointer transition-colors">Faça seu login</li></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
