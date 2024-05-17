import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";

const API_TOKEN = "a6e55ac0e5704e439442915ba5e0d07a";
const BASE_URL = "https://api.football-data.org/v4";

export function Games() {
  const [times, setTimes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obter informações das competições
        const response = await axios.get(`${BASE_URL}/teams/`, {
          headers: {
            "X-Auth-Token": API_TOKEN,
          },
        });

        setTimes(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className=" text-gray-400 text-center p-8">
        <h2 className="text-4xl font-bold">Featured Game</h2>

        <p className="text-green-400 mt-2 font-bold text-7xl">
          Brazilian Championship Series A
        </p>
        <h3 className="text-xl mt-4 text-gray-400">
          Choose your team to bet on:{" "}
        </h3>
      </div>
      <div className="md:flex md:justify-between">
        {/* Coluna da esquerda */}
        <div className="md:w-1/3">
          {[1, 2, 3].map((index) => (
            <div className="mb-4" key={index}>
              {/* Card */}
              <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                <h3 className="text-white text-3xl font-bold mb-2">
                  Bayern vs Real Madrid
                </h3>
                <p className="text-gray-400 text-lg">Semifinal - Jogo 1 de 2</p>
                <div className="flex justify-between mt-4">
                  <img src={Real} alt="Real" className="w-20 h-20" />
                  <p className="text-gray-400 font-bold text-5xl mt-4">2 - 1</p>
                  <img src={Bayern} alt="Bayern" className="w-20 h-20" />
                </div>
              </Card>
            </div>
          ))}
        </div>
        {/* Coluna do meio */}
        <div className="md:w-1/3">
          {[1, 2, 3].map((index) => (
            <div className="mb-4" key={index}>
              {/* Card */}
              <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                <h3 className="text-white text-3xl font-bold mb-2">
                  Bayern vs Real Madrid
                </h3>
                <p className="text-gray-400 text-lg">Semifinal - Jogo 1 de 2</p>
                <div className="flex justify-between mt-4">
                  <img src={Real} alt="Real" className="w-20 h-20" />
                  <p className="text-gray-400 font-bold text-5xl mt-4">2 - 1</p>
                  <img src={Bayern} alt="Bayern" className="w-20 h-20" />
                </div>
              </Card>
            </div>
          ))}
        </div>
        {/* Coluna da direita */}
        <div className="md:w-1/3">
          {[1, 2, 3].map((index) => (
            <div className="mb-4" key={index}>
              {/* Card */}
              <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                <h3 className="text-white text-3xl font-bold mb-2">
                  Bayern vs Real Madrid
                </h3>
                <p className="text-gray-400 text-lg">Semifinal - Jogo 1 de 2</p>
                <div className="flex justify-between mt-4">
                  <img src={Real} alt="Real" className="w-20 h-20" />
                  <p className="text-gray-400 font-bold text-5xl mt-4">2 - 1</p>
                  <img src={Bayern} alt="Bayern" className="w-20 h-20" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
