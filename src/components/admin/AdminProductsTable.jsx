import { useEffect } from "react";
import useProductService from "../../customHooks/useProductService";

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: 2999,
  },
  {
    id: 2,
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    id: 3,
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: 99,
  },
  // Agrega más objetos según tus datos
];

function AdminProductsTable() {
  products.sort((a, b) => a.name.localeCompare(b.name));

  const { products: allproducts, loading } = useProductService();

  useEffect(() => {
    console.log(!loading ? allproducts : "No hay productos");
  });

  return (
    <>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Descuento
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <p>Cargando...</p>
              ) : (
                allproducts.map((product) => (
                  <tr
                    key={product.id_producto}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">{/* Checkbox y etiqueta */}</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {product.nombre}
                    </td>
                    <td className="px-6 py-4">$ {product.precio}</td>
                    <td className="px-6 py-4">{product.descuento} %</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Editar
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminProductsTable;
