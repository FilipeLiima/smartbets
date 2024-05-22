import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";

export function Bet() {
  const [betValue, setBetValue] = useState<number>(0); // Definindo o tipo como number
  const [selectedOdds, setSelectedOdds] = useState<number>(1); // Valor padrão das odds
  const [potentialWin, setPotentialWin] = useState<number>(0); // Definindo o tipo como number

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value); // Convertendo o valor para número
    setBetValue(value); // Atualiza o valor da aposta

    // Calcula o potencial de ganho somente se as odds forem selecionadas
    if (selectedOdds !== 1) {
      const potentialWin = selectedOdds * value; // Calcula o potencial de ganho com base nas odds e no valor da aposta
      setPotentialWin(potentialWin.toFixed(2)); // Define o potencial de ganho
    }
  };

  const handleOddsSelect = (odds: number) => {
    setSelectedOdds(odds); // Atualiza as odds selecionadas

    // Calcula o potencial de ganho somente se o valor da aposta for definido
    if (betValue !== 0) {
      const potentialWin = odds * betValue; // Calcula o potencial de ganho com base nas odds e no valor da aposta
      setPotentialWin(potentialWin.toFixed(2)); // Define o potencial de ganho
    }
  };
  return (
    <div className="container mx-auto px-4 ">
      <div className="text-white text-center p-8">
        <p className="text-green-400 mt-2 font-bold text-7xl">Bet To Win</p>
        <h3 className="text-xl mt-4 text-gray-400">
          Select options to continue:
        </h3>
      </div>
      <div className="md:flex md:justify-between">
        {/* Coluna da esquerda */}
        <div className="md:w-1/3">
          <div className="mb-4">
            {/* Card 1 */}
            <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
              <h3 className="text-white text-3xl font-bold mb-2">
                Bayern vs Real Madrid
              </h3>
              <p className="text-gray-400 text-lg">Semifinal - Game 1 of 2</p>
              <div className="flex justify-between mt-4">
                <img src={Real} alt="Real" className="w-20 h-20" />
                <p className="text-gray-400 font-bold text-5xl mt-4"> 2 - 1</p>
                <img src={Bayern} alt="Bayern" className="w-20 h-20" />
              </div>
            </Card>
          </div>
          {/* Card 2 */}
          <div className="mb-4">
            {/* Conteúdo do card 2 */}
            <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4 ">
              {/* Frase */}
              <p className="text-white text-3xl font-bold mb-4 ">
                Step 1 - Select the type:
              </p>

              {/* Botões */}
              <div className="mb-4 flex justify-between">
                <div className="mr-2">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-2xl mb-2"
                    onClick={() => handleOddsSelect(4.5)}
                  >
                    4.50
                  </Button>
                  {/* Informações abaixo do botão 1 */}
                  <div className="text-gray-500">
                    <p>Bayern</p>
                  </div>
                </div>

                {/* Botão para selecionar odds */}
                <div className="mr-2">
                  <Button
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2"
                    onClick={() => handleOddsSelect(1.34)}
                  >
                    1.34
                  </Button>
                  {/* Informações abaixo do botão 2 */}
                  <div className="text-gray-500">
                    <p>Draw</p>
                  </div>
                </div>

                {/* Botão para selecionar odds */}
                <div>
                  <Button
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2"
                    onClick={() => handleOddsSelect(8.75)}
                  >
                    8.75
                  </Button>
                  {/* Informações abaixo do botão 3 */}
                  <div className="text-gray-500">
                    <p>Real Madrid</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Coluna da direita */}
        <div className="md:w-2/3">
          {/* Card 3 */}
          <div className="mb-4 h-full flex flex-col justify-between">
            {/* Conteúdo do card 3 */}
            <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4 h-full">
              {/* Frase inicial */}
              <p className="text-white text-3xl font-bold  mb-2">
                Step 2 – Enter the value::{" "}
              </p>
              {/* Valor grande */}
              <div className="flex-1 flex flex-col justify-center items-center mb-2">
                <Input
                  type="number"
                  value={betValue}
                  onChange={handleInputChange}
                  className="bg-gray-900 text-white p-8 rounded-2xl border-none "
                  placeholder="Enter the bet amount"
                />
              </div>
              {/* Potencial ganho */}
              <p className="text-green-600 text-xl text-center mb-4">
                Você pode ganhar: ${potentialWin}
              </p>
              {/* Campo de input */}

              {/* Botão */}
              <div className="mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-2xl w-full">
                  BET
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* Novo Card abaixo dos cards existentes */}
      <div className="container mx-auto px-4 p-6">
        <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-auto">
          <h3 className="text-white text-3xl font-bold mb-2">Bet summary</h3>
          <div className="text-left">
            <p className="text-gray-400 text-lg">Type of bets: Option 1</p>
            <p className="text-gray-400 text-lg">Date bet: 2024-05-19</p>
            <p className="text-gray-400 text-lg">
              Teams: Bayern vs Real Madrid
            </p>
            <p className="text-gray-400 text-lg">Values: $10</p>
            <p className="text-gray-400 text-lg">Status: Pending</p>
          </div>
        </Card>
      </div>
      {/* Adicionando um novo card abaixo do resumo da aposta */}
      <div className="container mx-auto px-4 p-6">
        <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-auto">
          <h3 className="text-white text-3xl font-bold mb-2">More info:</h3>
          <div className="text-left">
            <p className="text-gray-400 text-lg">Table</p>
            <p className="text-gray-400 text-lg">Statistics</p>
            <p className="text-gray-400 text-lg">Too much data</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
