import { abrilFatface } from "@/app/layout";

function LeftColumn() {
  return (
    <section className="flex flex-grow basis-96 items-center justify-center min-h-[50vh] md:min-h-[90vh] px-20 bg-blue-600 text-slate-100">
      <div className="flex flex-col gap-3 w-full max-w-[26.875rem]">
        <h1 className={`${abrilFatface.className} text-5xl w-fit text-blue-950`}>
          Contato Inteligente
        </h1>
        <p className="text-xl">
          Todos os seus contatos organizados em um único lugar
        </p>
      </div>
    </section>
  );
}

export default LeftColumn;
