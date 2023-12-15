import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">Novo Produto</h1>
      <form>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nome"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Preço"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Estoque"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <select className="select select-primary">
            <option disabled selected>
              Categoria
            </option>
            <option value="Garrafas">Garrafas</option>
            <option value="Eletrônicos">Eletrônicos</option>
          </select>
        </div>
        <div className="flex justify-between mt-6">
          <Link href="/produtos" className="btn btn-outline">
            Cancelar
          </Link>
          <button className="btn btn-primary">Criar</button>
        </div>
      </form>
    </div>
  );
}
