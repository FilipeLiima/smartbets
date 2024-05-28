// Importe de bibliotecas e componentes
import { Button } from "./components/ui/button";
import { Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Bird } from "lucide-react";
import { Blend } from "lucide-react";
import { Fingerprint } from "lucide-react";
import Blockchain from "./assets/blockchain.svg";
import Bola from "./assets/bola.svg";
import Chainlink from "./assets/chainlink.svg";
import Avalanche from "./assets/avalanche.svg";
import DataFeeds from "./assets/datafeeds.svg";
import Functions from "./assets/functions.svg";
import Automation from "./assets/automation.svg";
import CCIP from "./assets/ccip.svg";
import VRF from "./assets/vrf.svg";
import Solidity from "./assets/solidity.svg";

export let userWalletId = null;

export function App() {
  // Função assíncrona para conectar ao MetaMask
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Solicita conexão com a carteira MetaMask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Verifica se há contas conectadas
        if (accounts.length > 0) {
          // A primeira conta geralmente é a conta principal do usuário
          const userWalletId = accounts[0];
          console.log("ID da carteira do usuário:", userWalletId);

          // Redireciona para a rota "/auth" após a conexão
          window.location.href = `/auth?walletId=${userWalletId}`;
        } else {
          alert("Nenhuma conta encontrada na carteira MetaMask.");
        }
      } catch (error) {
        console.error("Erro ao conectar-se ao MetaMask:", error);
      }
    } else {
      alert("Por favor, instale o MetaMask para se conectar.");
    }
  };

  return (
    <div className="bg-black min-h-screen w-screen relative">
      <img
        src="src/assets/logo.svg"
        alt="Logo"
        className="absolute top-0 left-0 m-5"
        style={{ width: "200px", height: "auto" }}
      />

      <Button className="text-xl absolute top-0 right-0 m-5 bg-black text-green-500 hover:bg-gray-800">
        How does it work?
      </Button>

      {/* Conteúdo */}
      <div className="bg-black flex flex-col items-center px-4 md:px-0">
        <Card className="bg-black p-6 border-none relative mt-16 w-full md:w-auto">
          <div className="w-auto">
            <h1 className="text-4xl md:text-7xl font-Inter text-white font-bold mb-6">
              <span className="block">Your safe bet,</span>
              <span className="block">transparent and</span>
              <span className="block">decentralized.</span>
            </h1>
            <h2 className="text-white text-xl md:text-3xl mb-6">
              Bet on Brazilian championship football games in a decentralized
              way.
            </h2>
          </div>
          <div className="flex justify-start">
            <Button
              className="text-xl md:text-3x1 p-3 md:p-5 m-5 bg-green-500 hover:bg-green-400 text-black font-bold"
              onClick={connectToMetaMask}
            >
              <Wallet className="w-5 h-5 md:w-7 md:h-7 mr-2" />
              Launch APP
            </Button>
          </div>
        </Card>
      </div>

      <div className="bg-black flex justify-center mt-8 px-4 md:px-0">
        <div className="w-full md:w-auto">
          <Card className="bg-black border-none">
            <CardContent>
              <img src={Blockchain} alt="Imagem" className="w-full" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-black">
        <div className="bg-black border-none max-w-[1400px] mx-auto px-4 md:px-0">
          <h2 className=" text-white text-4xl md:text-7xl text-center font-bold p-8">
            Our values
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-8 mb-8">
            {/* Card 1 - Área 1 */}
            <div className="col-span-1 relative ">
              <div className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 md:p-16 border-none relative">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-4">
                  <Bird className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white text-xl md:text-3xl font-bold mb-2">
                  Freedom
                </h3>
                <p className="text-gray-400 text-lg">
                  Bet without restrictions, with complete autonomy and
                  transparency in all your betting choices within the platform
                </p>
              </div>
            </div>
            {/* Card 2 - Área 2 */}
            <div className="col-span-1 relative">
              <div className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-16 border-none relative">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-4">
                  <Blend className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white text-xl md:text-3xl font-bold mb-2">
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
              <div className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-16 border-none relative">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-4">
                  <Fingerprint className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white text-xl md:text-3xl font-bold mb-2">
                  Security
                </h3>
                <p className="text-gray-400 text-lg">
                  Your personal and financial information while enjoying a
                  reliable betting platform that is protected.
                </p>
              </div>
            </div>
          </div>
          <Card className="bg-black max-w-[1400px] border-none ">
            <div>
              <h2 className=" text-white text-4xl md:text-7xl text-center font-bold p-8">
                Built with
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
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
              <div className="col-span-6 md:col-span-1">
                <img src={VRF} alt="VRF" />
              </div>
              <div className="col-span-6 md:col-span-1">
                <img src={Solidity} alt="Solidity" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Foto */}
      <div className="bg-black flex justify-center p-8 md:p-20">
        <div className="max-w-[1400px] flex flex-col md:flex-row w-full">
          {/* Coluna da Esquerda */}
          <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
            <Card className="bg-black border-none">
              <CardContent>
                <img src={Bola} alt="Imagem" className="w-full" />
              </CardContent>
            </Card>
          </div>
          {/* Coluna da Direita */}
          <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-0">
            <div className="text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-8">
                Features and Functionality{" "}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8 ">
                <span className="text-white font-bold">Coin Swap:</span> This
                functionality allows users to exchange one cryptocurrency for
                another in a direct and simplified way, providing liquidity and
                accessibility to the different digital assets available on the
                market.
              </p>
              <p className="text-gray-400 text-lg md:text-xl mb-8">
                <span className="text-white font-bold">
                  Reward Exclusive NFTs:{" "}
                </span>{" "}
                Refers to the distribution of exclusive NFTs (Non-Fungible
                Tokens) as a reward for certain actions or achievements within a
                platform or community. These NFTs often represent unique digital
                items or collectibles, conferring special status on holders.
              </p>
              <p className="text-gray-400 text-lg md:text-xl mb-8">
                <span className="text-white font-bold">
                  Deflationary token:{" "}
                </span>
                It is a type of cryptographic token whose total supply decreases
                over time. This is generally achieved through mechanisms built
                into the token, such as token burning or transaction fees that
                are redistributed to existing holders. This approach can help
                create scarcity and appreciation of the token over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
