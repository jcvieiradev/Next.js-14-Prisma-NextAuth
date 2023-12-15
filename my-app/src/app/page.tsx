export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center bg-neutral">
      <div className="bg-white p-12 rounded-lg">
        <form className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Senha"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary max-w-xs">Entrar</button>
        </form>
      </div>
    </main>
  );
}
