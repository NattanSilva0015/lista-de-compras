import { useState } from "react";
import Input from "./Input";

function AddProducts({ onAddProductSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 text-[#e2e8f0] bg-[rgba(255,255,255,0.05)] rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Adicione um Produto"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Adicione uma descrição ao Produto"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se os campos estao preenchidos
          if (!name.trim()) {
            return alert(
              "Por favor, preencha o nome do produto para adicionar.",
            );
          }
          onAddProductSubmit(name, description);
          setName("");
          setDescription("");
        }}
        className="bg-[#4f46e5] text-[#e2e8f0] px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddProducts;
