import { Button } from "./components/ui/button";
import { Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Blockchain from "./assets/blockchain.svg";

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
    <div className="bg-black h-screen w-screen relative">
      {/* Imagem */}
      <img
        src="src/assets/logo.svg"
        alt="Logo"
        className="absolute top-0 left-0 m-5"
        style={{ width: "200px", height: "auto" }}
      />

      {/* Botão "How does it work?" */}
      <Button
        className="absolute top-0 right-0 m-5 bg-black text-green-500 hover:bg-gray-800"
        onClick={connectToMetaMask}
      >
        How does it work?
      </Button>

      {/* Conteúdo */}
      <div className="bg-black flex flex-col items-center ">
        <Card className="bg-black p-6 border-none relative mt-16">
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

      {/* Carrossel */}
      <div className="bg-black flex justify-center mt-8 ">
        <Carousel className="w-full max-w-[1400px] ">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-none">
                    <CardContent className="flex items-center justify-center ">
                      <img src={Blockchain} alt="Blockchain" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Cards */}
      <div className="bg-black">
        <div className="bg-black border-none max-w-[1400px] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-8 mb-8">
            {/* Card 1 - Área 1 */}
            <div className="col-span-1">
              <div className="bg-gray-700 text-white flex flex-col p-16 text-center border-none">
                <h3 className="text-white text-3xl font-medium mb-2">
                  Liberdade
                </h3>
                <p className="text-gray-400 text-lg">
                  Decentralized Odds Mechanism Decentralized Odds Mechanism ,
                  Decentralized.
                </p>
              </div>
            </div>
            {/* Card 2 - Área 2 */}
            <div className="col-span-1">
              <div className="bg-gray-700 text-white flex flex-col text-center p-16 border-none">
                <h3 className="text-white text-3xl font-medium mb-2">
                  Transparência
                </h3>
                <p className="text-gray-400 text-lg">
                  Decentralized Odds Mechanism Decentralized Odds Mechanism ,
                  Decentralized.
                </p>
              </div>
            </div>
            {/* Card 3 - Área 3 */}
            <div className="col-span-1">
              <div className="bg-gray-700 text-white flex flex-col text-center p-16 border-none">
                <h3 className="text-white text-3xl font-medium mb-2">
                  Segurança
                </h3>
                <p className="text-gray-400 text-lg">
                  Decentralized Odds Mechanism Decentralized Odds Mechanism ,
                  Decentralized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
