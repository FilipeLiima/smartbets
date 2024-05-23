import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Swap } from "./Swap.tsx";
import { Games } from "./Games.tsx";

export function Auth() {
  // Estado para armazenar o ID da carteira do usuário
  const [userWalletId, setUserWalletId] = useState(null);
  // Estado para controlar a guia ativa
  const [activeTab, setActiveTab] = useState("swap");

  // Efeito de lado para executar quando o componente for montado
  useEffect(() => {
    // Extrai o parâmetro 'walletId' da URL
    const urlParams = new URLSearchParams(window.location.search);
    const walletId = urlParams.get("walletId");

    // Verifica se o ID da carteira foi passado como parâmetro na URL
    if (walletId) {
      // Define o 'userWalletId' com o valor extraído da URL
      setUserWalletId(walletId);
      // Armazena o ID da carteira no armazenamento local do navegador
      localStorage.setItem("userWalletId", walletId);
      // Oculta o ID da URL
      window.history.pushState({}, document.title, window.location.pathname);
    } else {
      // Se o ID da carteira não estiver na URL, verifica se está armazenado no localStorage
      const storedWalletId = localStorage.getItem("userWalletId");
      if (storedWalletId) {
        // Define o 'userWalletId' com o valor armazenado no localStorage
        setUserWalletId(storedWalletId);
      }
    }
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "swap":
        return <Swap />;
      case "gamesStatus":
        return <Games />;
    }
  };

  return (
    <div className="bg-black text-white ">
      {/* Título no topo direito */}
      <div className="absolute top-0 right-0 p-4">
        <h1>
          <span className="text-gray-400  text-lg font-bold">Welcome,</span>{" "}
          <span className="text-green-600  text-lg font-bold">
            {userWalletId}
          </span>
        </h1>
      </div>
      {/* Menu centralizado no topo da página */}
      <div className="w-full flex justify-center mb-8 p-8">
        <div className="flex justify-center items-center">
          <Button
            className={`${
              activeTab === "swap" ? "bg-gray-600" : "bg-gray-400"
            } hover:bg-gray-700 py-2 px-4 m-2 rounded text-black`}
            onClick={() => setActiveTab("swap")}
          >
            SWAP
          </Button>
          <Button
            className={`${
              activeTab === "gamesStatus" ? "bg-gray-600" : "bg-gray-400"
            } hover:bg-gray-700 py-2 px-4 m-2 rounded text-black`}
            onClick={() => setActiveTab("gamesStatus")}
          >
            GAMES
          </Button>
        </div>
      </div>

      {/* Conteúdo do tab */}
      <div className="mt-8">{renderTabContent()}</div>
    </div>
  );
}
