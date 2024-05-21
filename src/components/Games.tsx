import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";
import { Bet } from "./Bet.tsx";

const API_TOKEN = "a6e55ac0e5704e439442915ba5e0d07a";
const BASE_URL = "https://api.football-data.org/v4";

export function Games() {
  const [times, setTimes] = useState<any[]>([]);
  const [mostrarAposta, setMostrarAposta] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const handleBetClick = () => {
    setMostrarAposta(true);
  };

  return (
    <div className="h-screen bg-black container mx-auto px-4">
      {!mostrarAposta && (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-400">Featured Game</h2>
          <p className="text-green-400 mt-4 font-bold text-7xl ">
            Brazilian Championship Series A
          </p>
          <h3 className=" text-xl mt-4 mb-6 text-gray-400">
            Choose your team to bet on:{" "}
          </h3>
          <div className="md:flex md:flex-wrap md:justify-center">
            {/* Coluna da esquerda */}
            <div className="md:w-1/3">
              {[1, 2].map((index) => (
                <div className="mb-8" key={index}>
                  <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      Bayern vs Real Madrid
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Semifinal - Game 1 of 2
                    </p>
                    <div className="flex justify-between mt-4">
                      <img src={Real} alt="Real" className="w-20 h-20" />
                      <p className="text-gray-400 font-bold text-5xl mt-4">
                        {" "}
                        2 - 1
                      </p>
                      <img src={Bayern} alt="Bayern" className="w-20 h-20" />
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
              {[4, 5].map((index) => (
                <div className="mb-8" key={index}>
                  <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      Bayern vs Real Madrid
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Semifinal - Game 1 of 2
                    </p>
                    <div className="flex justify-between mt-4">
                      <img src={Real} alt="Real" className="w-20 h-20" />
                      <p className="text-gray-400 font-bold text-5xl mt-4">
                        {" "}
                        2 - 1
                      </p>
                      <img src={Bayern} alt="Bayern" className="w-20 h-20" />
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
              {[7, 8].map((index) => (
                <div className="mb-8" key={index}>
                  <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      Bayern vs Real Madrid
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Semifinal - Game 1 of 2
                    </p>
                    <div className="flex justify-between mt-4">
                      <img src={Real} alt="Real" className="w-20 h-20" />
                      <p className="text-gray-400 font-bold text-5xl mt-4">
                        {" "}
                        2 - 1
                      </p>
                      <img src={Bayern} alt="Bayern" className="w-20 h-20" />
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
