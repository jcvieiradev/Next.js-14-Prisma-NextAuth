import { prisma } from "@/app/libs/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return (
    <div>
      <div className="flex justify-between itens-center mb-6">
        <h1 className="text-lg font-semibold">Produtos</h1>
        <Link className="btn btn-primary" href="produtos/novo">
          Novo
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>R$ {product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category.name}</td>
              <td>Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
