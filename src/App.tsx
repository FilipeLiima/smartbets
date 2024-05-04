import { Button } from "./components/ui/button";
import { Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";

export function App() {
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        alert("Connected to MetaMask successfully!");

        // Obtém o hash da carteira autenticada
        const walletHash = "hash_da_carteira_autenticada";

        // Redireciona para a rota "/home" com o hash da carteira como parâmetro de rota
        window.location.href = `/home?walletHash=${walletHash}`;
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask to connect.");
    }
  };

  return (
    <div className="bg-black h-screen w-screen relative flex items-center">
      <img
        src="src/assets/logo.svg"
        alt="Logo"
        className="absolute top-0 left-0 m-5"
        style={{ width: "200px", height: "auto" }}
      />

      <Button
        className="absolute top-0 right-0 m-5 bg-black text-green-500 hover:bg-gray-800"
        onClick={connectToMetaMask}
      >
        How does it work?
      </Button>

      <div className="bg-black flex flex-col items-start ml-10">
        <Card className="bg-black p-6 border-none relative">
          <div className="w-auto">
            <h1 className="text-7xl text-white font-bold mb-6">
              <span className="block">Your safe bet,</span>
              <span className="block">transparent and</span>
              <span className="block">decentralized.</span>
            </h1>
            <h2 className="text-white text-3xl mb-6">
              Bet on Brazilian championship football games in a decentralized
              way.
            </h2>
          </div>

          <div className="flex justify-start">
            <Button
              className="p-5 m-5 hover:bg-gray-200 bg-green-500 text-black"
              onClick={connectToMetaMask}
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
