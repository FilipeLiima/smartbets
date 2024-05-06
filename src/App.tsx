import { Button } from "./components/ui/button";
import { Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Bird } from "lucide-react";
import { Blend } from "lucide-react";
import { Fingerprint } from "lucide-react";
import Blockchain from "./assets/blockchain.svg";
import Chainlink from "./assets/chainlink.svg";
import Avalanche from "./assets/avalanche.svg";
import DataFeeds from "./assets/datafeeds.svg";
import Functions from "./assets/functions.svg";
import Automation from "./assets/automation.svg";
import CCIP from "./assets/ccip.svg";

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
      <img
        src="src/assets/logo.svg"
        alt="Logo"
        className="absolute top-0 left-0 m-5"
        style={{ width: "200px", height: "auto" }}
      />

      <Button
        className="text-xl absolute top-0 right-0 m-5 bg-black text-green-500 hover:bg-gray-800"
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
              className="text-3x1 p-5 m-5 bg-green-500 hover:bg-green-400 text-black font-bold"
              onClick={connectToMetaMask}
            >
              <Wallet className="w-7 h-7 mr-2" />
              Launch APP
            </Button>
          </div>
        </Card>
      </div>

      <div className="bg-black flex justify-center mt-8">
        <div className="mx-auto">
          <Card className="bg-black border-none">
            <CardContent>
              <img src={Blockchain} alt="Imagem" className="w-full" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-black">
        <div className="bg-black border-none max-w-[1400px] mx-auto">
          <h2 className=" text-white  text-7xl text-center font-bold p-8">
            Our values
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-8 mb-8">
            {/* Card 1 - Área 1 */}
            <div className="col-span-1 relative ">
              <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-16 border-none relative">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-4">
                  <Bird className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white text-3xl font-bold mb-2">Freedom</h3>
                <p className="text-gray-400 text-lg">
                  Bet without restrictions, with complete autonomy and
                  transparency in all your betting choices within the platform
                </p>
              </div>
            </div>
            {/* Card 2 - Área 2 */}
            <div className="col-span-1 relative">
              <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-16 border-none relative">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-4">
                  <Blend className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white text-3xl font-bold mb-2">
                  Transparency
                </h3>
                <p className="text-gray-400 text-lg">
                  Bet without restrictions, with complete autonomy and
                  transparency in all your betting choices within the platform
                </p>
              </div>
            </div>

            {/* Card 3 - Área 3 */}
            <div className="col-span-1 relative">
              <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-16 border-none relative">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-4">
                  <Fingerprint className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white text-3xl font-bold mb-2">Security</h3>
                <p className="text-gray-400 text-lg">
                  Your personal and financial information while enjoying a
                  reliable betting platform that is protected.
                </p>
              </div>
            </div>
          </div>
          <Card className="bg-black max-w-[1400px] mx-auto border-none ">
            <div>
              <h2 className=" text-white text-7xl text-center font-bold p-8">
                Built with
              </h2>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {/* Primeira Linha */}
              <div className="col-span-6 md:col-span-1">
                <img src={Chainlink} alt="Chainlin" />
              </div>
              <div className="col-span-6 md:col-span-1">
                <img src={Avalanche} alt="Avalanche" />
              </div>
              <div className="col-span-6 md:col-span-1">
                <img src={DataFeeds} alt="DataFeeds" />
              </div>
              <div className="col-span-6 md:col-span-1">
                <img src={Functions} alt="Functions" />
              </div>
              <div className="col-span-6 md:col-span-1">
                <img src={Automation} alt="Automation" />
              </div>
              <div className="col-span-6 md:col-span-1">
                <img src={CCIP} alt="CCIP" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Foto  */}
      <div className="bg-black flex justify-center p-8">
        <div className="mx-auto">
          <Card className="bg-black border-none">
            <CardContent>
              <img src={Blockchain} alt="Imagem" className="w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
