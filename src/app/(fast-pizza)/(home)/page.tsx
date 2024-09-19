import { CreateUser } from "../../components/CreateUser";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <main className="flex flex-col justify-center gap-8">
        <div className="text-center px-4 space-y-8 w-full">
          <h2 className="font-bold text-xl sm:text-3xl tracking-widest text-zinc-700">
            A melhor pizza.<br />
            <span className="mt-8 text-yellow-400 font-mono tracking-wide">Diretamente do forno, direto para você.</span>
          </h2>
          <p className="text-zinc-500 font-mono">👋 Seja muito bem-vindo. Começa por me dizer o teu nome:</p>
        </div>
        <CreateUser />
      </main>
    </div>
  );
}
