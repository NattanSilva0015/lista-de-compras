import React, { useState } from "react";
import AddProducts from "./components/AddProducts";
import Products from "./components/Products";
import { v4 } from "uuid";
import { useEffect } from "react";
import Title from "./components/Title";
import(v4);

function App() {
  const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) || []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);



  // Verfica os itens clicados e atualiza a lista
  function onProductClick(productId) {
    const newProducts = products.map((products) => {
      // preciso atualizar a lista
      if (products.id === productId) {
        return { ...products, isPurchased: !products.isPurchased };
      }

      // nao preciso atualizar a lista
      return products;
    });
    setproducts(newProducts);
  }

  function onDeleteProductClick(productId) {
    const newProducts = products.filter(
      (products) => productId !== products.id
    );
    setproducts(newProducts);
  }

  function onAddProductSubmit(name, description) {
    const newProduct = {
      id: v4(),
      name: name,
      description: description,
      isPurchased: false,
    };
    setproducts([...products, newProduct]);
  }

  return (
    <div className="w-screen h-screen bg-[#0f172a] flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <Title>Lista de Compras</Title>

        <AddProducts onAddProductSubmit={onAddProductSubmit} />

        <Products
          products={products}
          onProductClick={onProductClick}
          onDeleteProductClick={onDeleteProductClick}
        />
      </div>
    </div>
  );
}

export default App;
