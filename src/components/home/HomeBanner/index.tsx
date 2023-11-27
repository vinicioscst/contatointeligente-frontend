import Link from "next/link";
import Button from "../../Button";

const HomeBanner = () => {
  return (
    <section className="w-full flex justify-center border-b border-font-color/25">
      <div className="flex flex-col items-center text-center gap-8 w-full max-w-5xl py-20 px-6">
        <div className="bg-secondary-color/30 rounded-md border border-accent-color/30 p-2 mb-12">
            <p>✨ Novas funcionalidades em breve...</p>
        </div>
        <h1 className="text-3xl sm:text-4xl leading-tight max-w-3xl ">
          A melhor forma de <span className="text-accent-color">organizar</span> seus contatos
        </h1>
        <p className="text-xl underline underline-offset-8">
          Crie e gerencie seus contatos de forma prática e intuitiva
        </p>
        <Link href={"/register"}>
          <Button bgColor="bg-primary-color" textColor="text-background-color" type="button" borderColor="outline-transparent">Primeiros passos</Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;
