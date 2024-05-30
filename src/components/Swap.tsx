import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";
import SwapIcon from "../assets/swap.svg";
import { ChevronDown } from "lucide-react";

export function Swap() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTokenTop, setSelectedTokenTop] = useState<Token | null>(null);
  const [selectedTokenBottom, setSelectedTokenBottom] = useState<Token | null>(
    null
  );

  const [isModalTopOpen, setIsModalTopOpen] = useState(false);
  const [isModalBottomOpen, setIsModalBottomOpen] = useState(false);

  useEffect(() => {
    // Função para obter os tokens da API do CoinGecko
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setTokens(response.data);
      } catch (error) {
        console.error("Erro ao obter tokens:", error);
      }
    };

    // Chama a função para obter os tokens quando o componente for montado
    fetchTokens();
  }, []);

  // Função para filtrar os tokens com base na consulta de pesquisa
  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Função para lidar com a seleção de um token da lista
  const handleTokenSelectTop = (token: Token) => {
    setSelectedTokenTop(token);
    setIsModalTopOpen(false); // Fecha o modal ao selecionar um token
  };

  // Função para lidar com a seleção de um token da lista
  const handleTokenSelectBottom = (token: Token) => {
    setSelectedTokenBottom(token);
    setIsModalBottomOpen(false); // Fecha o modal ao selecionar um token
  };
  // Função para adicionar o token à carteira MetaMask
  const addTokenToWallet = async () => {
    try {
      // Verifica se a MetaMask está instalada e conectada
      if (window.ethereum && window.ethereum.isMetaMask) {
        // Endereço do contrato do token
        const tokenAddress = "0x73cc5E1F0aa704c5EDcbcCa97F9c9Ef0Fc9F977b";

        // Objeto de solicitação para adicionar o token à carteira MetaMask
        const params = {
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: tokenAddress,
              symbol: "BET", // Símbolo do token
              decimals: 5, // Casas decimais do token
              image: "", // URL da imagem do token (opcional)
            },
          },
        };

        // Chama a função ethereum.request para adicionar o token
        await window.ethereum.request(params);
        // Exibe mensagem de sucesso
        alert("Token added to wallet successfully!");
      } else {
        // Se a MetaMask não estiver instalada ou conectada, exibe uma mensagem de erro
        alert("MetaMask is not installed or not connected.");
      }
    } catch (error) {
      // Se ocorrer algum erro durante o processo, exibe o erro
      alert(
        `Error adding token to wallet. Please try again later or contact support for assistance.`
      );
    }
  };

  return (
    <div className="h-screen bg-black container mx-auto px-4">
      <div className="container mx-auto px-4">
        <div className=" text-gray-400 text-center">
          <h2 className="text-4xl font-bold">Swap Your Coin</h2>

          <p className="text-green-400 mt-4 font-bold text-7xl">
            Conversion At Any Time
          </p>
          <h3 className="text-xl mt-4 text-gray-400">
            Choose between the different currencies available:{" "}
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <Card className="bg-gray-900 border-none w-[650px] m-4 p-6">
          {/* Card 1 */}
          <Button
            className="bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl mb-4 flex items-center"
            onClick={addTokenToWallet} // Adiciona o token à carteira MetaMask ao clicar no botão
          >
            BET TOKEN
          </Button>
          <h2 className="text-white font-bold mb-4 text-3xl">
            Swap with the network's native token and exchange for USDT or any
            other currency
          </h2>
          <img src={SwapIcon} alt="Swap" className="mb-4" />
        </Card>

        <Card className="bg-gray-900 border-none w-[650px] m-4 p-6">
          {/* Card 2 */}
          <h2 className="text-white font-bold text-left text-3xl mb-12">
            Swap to start betting on your favorite team.
          </h2>
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <Input
                type="number"
                className="bg-gray-800 border-gray-700 text-white font-bold py-2 px-4 rounded-2xl p-12 text-xl"
                placeholder="You pay"
              />
              <Dialog open={isModalTopOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() => setIsModalTopOpen(true)}
                  >
                    {selectedTokenTop ? selectedTokenTop.name : "BET"}

                    <ChevronDown className="ml-2 h-5 w-5 text-white inline-block" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900 border-none text-lg text-white">
                  <DialogHeader>
                    <DialogTitle>Selecione um token</DialogTitle>
                    <DialogDescription>
                      Pesquise pelo nome do token
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative">
                      <Input
                        id="search"
                        className="bg-gray-800 border-gray-700 text-white text-lg py-2 px-8 rounded w-full"
                        placeholder="Pesquise o nome"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <ul className="overflow-y-auto max-h-60">
                      {filteredTokens.map((token) => (
                        <li
                          key={token.id}
                          className="text-white cursor-pointer hover:bg-gray-800 py-2 px-4 rounded"
                          onClick={() => handleTokenSelectTop(token)}
                        >
                          {token.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl"
                      onClick={() => setIsModalTopOpen(false)}
                    >
                      Fechar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Ícone */}
          <div className="flex justify-center mb-2 mt-2">
            <ArrowRightLeft className="text-white w-8 h-8" />
          </div>

          {/* Segundo Card */}
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <Input
                type="number"
                className="bg-gray-800 border-gray-700 text-white font-bold py-2 px-4 rounded-2xl p-12 text-xl"
                placeholder="You receive"
              />
              <Dialog open={isModalBottomOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() => setIsModalBottomOpen(true)}
                  >
                    {selectedTokenBottom
                      ? selectedTokenBottom.name
                      : "Selecionar um token"}
                    <ChevronDown className="ml-2 h-5 w-5 text-white inline-block" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900 border-none text-lg text-white">
                  <DialogHeader>
                    <DialogTitle>Selecione um token</DialogTitle>
                    <DialogDescription>
                      Pesquise pelo nome do token
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative">
                      <Input
                        id="search"
                        className="bg-gray-800 border-gray-700 text-white text-lg py-2 px-8 rounded w-full"
                        placeholder="Pesquise o nome"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <ul className="overflow-y-auto max-h-60">
                      {filteredTokens.map((token) => (
                        <li
                          key={token.id}
                          className="text-white cursor-pointer hover:bg-gray-800 py-2 px-4 rounded"
                          onClick={() => handleTokenSelectBottom(token)}
                        >
                          {token.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl"
                      onClick={() => setIsModalBottomOpen(false)}
                    >
                      Fechar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-black text-xl font-bold py-2 px-4 rounded-2xl w-full p-6 mt-5 ">
              SWAP
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
