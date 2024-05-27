// Importe de bibliotecas e componentes
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";
import { Box } from "./Box.tsx";

export function Bet() {
  // Definindo os estados iniciais

  const [betValue, setBetValue] = useState<number>(0); // Valor da aposta
  const [selectedOdds, setSelectedOdds] = useState<number>(1); // Valor padrão das odds
  const [potentialWin, setPotentialWin] = useState<number>(0); // Potencial de ganho
  const [redirectToBox, setRedirectToBox] = useState<boolean>(false); // Estado para controlar o redirecionamento

  /// Função para redirecionar para a rota especificada
  const redirectToBoxComponent = () => {
    setRedirectToBox(true); // Define o estado para redirecionar para verdadeiro
  };
  // Verifique se o estado redirectToBox é verdadeiro e renderize o componente Box se for
  if (redirectToBox) {
    return <Box />;
  }

  // Função para lidar com a mudança de valor no input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value); // Convertendo o valor para número
    setBetValue(value); // Atualiza o valor da aposta

    // Calcula o potencial de ganho somente se as odds forem selecionadas
    if (selectedOdds !== 1) {
      const potentialWin = selectedOdds * value; // Calcula o potencial de ganho com base nas odds e no valor da aposta
      setPotentialWin(potentialWin.toFixed(2)); // Define o potencial de ganho
    }
  };
  // Função para selecionar as odds
  const handleOddsSelect = (odds: number) => {
    setSelectedOdds(odds); // Atualiza as odds selecionadas

    // Calcula o potencial de ganho somente se o valor da aposta for definido
    if (betValue !== 0) {
      const potentialWin = odds * betValue; // Calcula o potencial de ganho com base nas odds e no valor da aposta
      setPotentialWin(potentialWin.toFixed(2)); // Define o potencial de ganho
    }
  };
  // Função para obter a data atual formatada
  const getCurrentDate = () => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };
  // Função para obter o tipo de aposta com base nas odds selecionadas
  const getTypeOfBet = () => {
    let typeOfBet = "";
    switch (selectedOdds) {
      case 4.5:
        typeOfBet = "Bayern";
        break;
      case 1.34:
        typeOfBet = "Draw";
        break;
      case 8.75:
        typeOfBet = "Real Madrid";
        break;
      default:
        typeOfBet = "Unknown";
    }
    return typeOfBet;
  };
  return (
    <div className="container mx-auto px-4 ">
      <div className="text-white text-center p-8">
        <h2 className="text-4xl font-bold text-gray-400">Customize Your Bet</h2>
        <p className="text-green-400 mt-2 font-bold text-7xl">
          Increase Your Chances Of Winning
        </p>
        <h3 className="text-xl mt-4 text-gray-400">
          Select options to continue:
        </h3>
      </div>
      <div className="md:flex md:justify-between">
        {/* Coluna da esquerda */}
        <div className="md:w-1/3">
          <div className="mb-4 ">
            {/* Card 1 */}
            <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-4">
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
          <div>
            {/* Conteúdo do card 2 */}
            <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-4 ">
              {/* Frase */}
              <p className="text-white text-3xl font-bold mb-4">
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
                    className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-2xl mb-2"
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
                    className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-2xl mb-2"
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
            <Card className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-4 h-full">
              {/* Frase inicial */}
              <p className="text-white text-3xl font-bold  mb-2">
                Step 2 – Enter the value::{" "}
              </p>
              {/* Valor grande */}
              <div className="flex-1 flex flex-col justify-center items-center">
                <Input
                  type="number"
                  value={betValue}
                  onChange={handleInputChange}
                  className="bg-gray-800 hover:bg-gray-700 text-white p-8 rounded-2xl border-none "
                  placeholder="Enter the bet amount"
                />
              </div>
              {/* Potencial ganho */}
              <p className="text-gray-400 text-7xl font-bold text-center mb-6">
                You can win: ${potentialWin}
              </p>
              {/* Campo de input */}

              {/* Botão */}
              <div className="mt-4">
                <button className="bg-green-600 hover:bg-green-700 border-white text-black font-bold py-2 px-4 rounded-2xl w-full">
                  BET NOW
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* Novo Card abaixo dos cards existentes */}

      {/* ... */}
      {/* Novo Card abaixo dos cards existentes */}
      <div className="container px-4 p-4">
        <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 mt-2 border-none mx-auto">
          <h3 className="text-white text-3xl font-bold mb-2">Bet Summary</h3>
          <div className="text-left">
            <p className="text-gray-400 text-lg">Bet type: {getTypeOfBet()} </p>
            <p className="text-gray-400 text-lg">
              Bet date: {getCurrentDate()}
            </p>
            <p className="text-gray-400 text-lg">Teams:</p>
            <p className="text-gray-400 text-lg">Amount bet: {betValue}</p>
            <p className="text-gray-400 text-lg">
              Possible earnings: {potentialWin}
            </p>
            <p className="text-gray-400 text-lg">Status:</p>
            <p className="text-gray-400 text-lg">
              Special Bônus:{" "}
              <Button
                className="bg-green-600 hover:bg-green-700 text-lg text-black font-bold ml-4 rounded-2xl"
                onClick={() => redirectToBoxComponent()}
              >
                Verify
              </Button>
            </p>
          </div>
        </Card>
      </div>
      {/* Adicionando um novo card abaixo do resumo da aposta */}
      <div className="container mx-auto px-4 p-2">
        <Card className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-auto">
          <h3 className="text-white text-3xl p-4 font-bold mb-4">
            Real-Time Statistics
          </h3>
          <div className="text-left">
            <div className="iframe-container mb-4">
              <iframe
                id="sofa-standings-embed-83-58766"
                src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/58766/standings/Brasileiro%20Serie%20A?widgetTitle=Brasileiro%20Serie%20A&showCompetitionLogo=true&v=2"
                style={{ height: "1031px", maxWidth: "100%", width: "100%" }}
                frameBorder="0"
                scrolling="no"
              ></iframe>
              <div
                style={{
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "left",
                }}
              ></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
