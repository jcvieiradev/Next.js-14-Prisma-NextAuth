import { prisma } from "@/libs/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  async function create(data: FormData) {
    "use server";
    await prisma.product.create({
      data: {
        name: String(data.get("name")),
        price: Number(data.get("price")),
        stock: Number(data.get("stock")),
        productCategoryId: Number(data.get("category")),
      },
    });
  }

  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">Novo Produto</h1>
      <form action={create}>
        <div className="flex gap-2">
          <input
            name="name"
            type="text"
            placeholder="Nome"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            name="price"
            type="number"
            placeholder="Preço"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            name="stock"
            type="number"
            placeholder="Estoque"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <select name="category" className="select select-primary">
            <option disabled selected>
              Categoria
            </option>
            <option value="1">Garrafas</option>
            <option value="2">Eletrônicos</option>
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
