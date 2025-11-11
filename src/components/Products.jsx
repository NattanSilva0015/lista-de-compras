import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import Button from "./Button";
import { CheckIcon } from "lucide-react";

function Products({ products, onProductClick, onDeleteProductClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(product) {
    const query = new URLSearchParams();
    query.set("name", product.name);
    query.set("description", product.description);
    navigate(`/product?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {products.map((products) => (
        <li key={products.id} className="flex gap-2">
          <button
            onClick={() => onProductClick(products.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              products.isPurchased && "line-through"
            }`}
          >
            {products.isPurchased && <CheckIcon></CheckIcon>}

            {products.name}
          </button>

          <Button
            onClick={() => onSeeDetailsClick(products)}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            onClick={() => onDeleteProductClick(products.id)}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Products;
