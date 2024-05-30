// Importe de bibliotecas e componentes
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Time1 from "../assets/time1.svg";
import Time2 from "../assets/time2.svg";
import { Bet } from "./Bet.tsx";
import { ethers } from "ethers";

// Defina uma interface para os dados das partidas
interface Partida {
  hash: string;
  teamHome: string;
  teamAway: string;
  stadium: string;
  date: number;
  goalsHome: number;
  goalsAway: number;
  status: number;
  result: number;
  oddHome: number;
  oddDraw: number;
  oddAway: number;
}

export function Games() {
  const [mostrarAposta, setMostrarAposta] = useState(false);
  const [partidas, setPartidas] = useState<Partida[]>([]);

  useEffect(() => {
    // Função para obter as partidas do contrato inteligente
    async function obterPartidasDoContrato() {
      try {
        // Conecte-se ao provedor Ethereum
        const provider = ethers.getDefaultProvider(
          "https://sepolia.infura.io/v3/de59a0c878b54eb2b3c6b2ec1aaf10d5"
        );

        // ABI simplificada apenas com a função que estamos chamando
        const abi = [
          "function getUpcomingMatches() view returns (tuple(bytes32 hash, string teamHome, string teamAway, uint256 date, string stadium, uint256 goalsHome, uint256 goalsAway, uint8 status, uint8 result, uint256 oddHome, uint256 oddDraw, uint256 oddAway)[])",
        ];

        const contrato = new ethers.Contract(
          "0x37B5A0790344b59988e9754fA9067a0110564F04",
          abi,
          provider
        );

        // Chame a função do contrato para obter as partidas
        const partidas: Partida[] = await contrato.getUpcomingMatches();

        // Atualize o estado com as partidas obtidas
        setPartidas(partidas);
      } catch (error) {
        console.error("Erro ao obter as partidas do contrato:", error);
      }
    }

    // Chame a função para obter as partidas do contrato quando o componente for montado
    obterPartidasDoContrato();
  }, []); // Executar apenas uma vez, quando o componente é montado

  // Função para lidar com o clique no botão de aposta
  const handleBetClick = () => {
    setMostrarAposta(true); // Atualiza o estado para mostrar a interface de aposta
  };

  return (
    <div className="bg-black container mx-auto px-4">
      {!mostrarAposta && (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-400">Featured Game</h2>
          <p className="text-green-400 mt-4 font-bold text-7xl ">
            Brazilian Championship Series A
          </p>
          <h3 className=" text-xl mt-4 mb-6 text-gray-400">
            Choose your team to bet on:{" "}
          </h3>
          <div className="h-screen md:flex md:flex-wrap md:justify-center">
            <div className="md:w-1/3">
              {partidas.map((partida, index) => (
                <div className="mb-8" key={index}>
                  <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-4">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      {partida.teamHome} vs {partida.teamAway}
                    </h3>
                    <p className="text-gray-400 text-lg">{partida.stadium}</p>
                    <div className="flex justify-between mt-4">
                      <img src={Time2} alt="Time2" className="w-20 h-20" />
                      <p className="text-gray-400 font-bold text-5xl mt-4">
                        {" "}
                        {partida.status}
                      </p>
                      <img src={Time1} alt="Time1" className="w-20 h-20" />
                    </div>
                    <button
                      onClick={handleBetClick}
                      className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-4"
                    >
                      BET
                    </button>
                  </Card>
                </div>
              ))}
            </div>
            {/* Coluna do meio */}
            <div className="md:w-1/3">
              {[3, 4].map((index) => (
                <div className="mb-8" key={index}>
                  <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-4">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      Bahia vs Vitória
                    </h3>
                    <p className="text-gray-400 text-lg">Initial Game</p>
                    <div className="flex justify-between mt-4">
                      <img src={Time2} alt="Time2" className="w-20 h-20" />
                      <p className="text-gray-400 font-bold text-5xl mt-4">
                        {" "}
                        0 - 0
                      </p>
                      <img src={Time1} alt="Time1" className="w-20 h-20" />
                    </div>
                    <button
                      onClick={handleBetClick}
                      className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-4"
                    >
                      BET
                    </button>
                  </Card>
                </div>
              ))}
            </div>
            {/* Coluna da direita */}
            <div className="md:w-1/3">
              {[5, 6].map((index) => (
                <div className="mb-8" key={index}>
                  <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-4">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      Bahia vs Vitória
                    </h3>
                    <p className="text-gray-400 text-lg">Initial Game</p>
                    <div className="flex justify-between mt-4">
                      <img src={Time2} alt="Time2" className="w-20 h-20" />
                      <p className="text-gray-400 font-bold text-5xl mt-4">
                        {" "}
                        0 - 0
                      </p>
                      <img src={Time1} alt="Time1" className="w-20 h-20" />
                    </div>
                    <button
                      onClick={handleBetClick}
                      className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-4"
                    >
                      BET
                    </button>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {mostrarAposta && <Bet />}
    </div>
  );
}
