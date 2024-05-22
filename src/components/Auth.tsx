import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swap } from "./Swap.tsx";
import { Games } from "./Games.tsx";

export function Auth() {
  const [activeTab, setActiveTab] = useState("swap");

  const renderTabContent = () => {
    switch (activeTab) {
      case "swap":
        return <Swap />;
      case "gamesStatus":
        return <Games />;
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Título no topo direito */}
      <div className="absolute top-0 right-0 p-4">
        <h1 className="text-xl font-bold">ID Wallet</h1>
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
