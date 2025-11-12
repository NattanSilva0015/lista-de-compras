import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function ProductPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-orange-100 flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-red-500"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes do Produto</Title>
        </div>

        <div className="bg-yellow-50 p-6 rounded-md">
          <h2 className="text-xl text-slate-800 font-bold">{name}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
