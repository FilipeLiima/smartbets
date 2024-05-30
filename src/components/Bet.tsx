// Importe de bibliotecas e componentes
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Time1 from "../assets/time1.svg";
import Time2 from "../assets/time2.svg";
import { Box } from "./Box.tsx";
import { History } from "./History";

export function Bet() {
  // Definindo os estados iniciais

  const [betValue, setBetValue] = useState<number>(0); // Valor da aposta
  const [selectedOdds, setSelectedOdds] = useState<number>(1); // Valor padrão das odds
  const [potentialWin, setPotentialWin] = useState<number>(0); // Potencial de ganho
  const [redirectToBox, setRedirectToBox] = useState<boolean>(false); // Estado para controlar o redirecionamento
  const [selectedCard, setSelectedCard] = useState("summary"); // Estado para controlar qual card deve ser exibido
  const [showHistory, setShowHistory] = useState(false);

  {
    /* Renderize o componente History somente se showHistory for true */
  }
  {
    showHistory && <History />;
  }

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
      setPotentialWin(parseFloat(potentialWin.toFixed(2))); // Define o potencial de ganho
    }
  };
  // Função para selecionar as odds
  const handleOddsSelect = (odds: number) => {
    setSelectedOdds(odds); // Atualiza as odds selecionadas

    // Calcula o potencial de ganho somente se as odds forem selecionadas
    if (selectedOdds !== 1) {
      const potentialWin = selectedOdds * betValue; // Calcula o potencial de ganho com base nas odds e no valor da aposta
      setPotentialWin(Number(potentialWin.toFixed(2))); // Define o potencial de ganho
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
        typeOfBet = "Time 1";
        break;
      case 1.34:
        typeOfBet = "Draw";
        break;
      case 8.75:
        typeOfBet = "Time 2";
        break;
      default:
        typeOfBet = "Unknown";
    }
    return typeOfBet;
  };

  // Função para lidar com o clique nos botões de SUMMARY e BONUS
  const handleButtonClick = (cardType: string) => {
    setSelectedCard(cardType); // Atualiza o estado para o tipo de card clicado
  };

  // Renderização condicional dos cards com base no estado selectedCard
  const renderSelectedCard = () => {
    if (selectedCard === "summary") {
      return (
        <div className="container px-4">
          <Card
            id="summary"
            className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-auto"
          >
            <div className="text-left">
              <h2 className="text-white text-center justify-center font-bold text-3xl mb-2">
                {" "}
                Main Bet Information:
              </h2>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Bet Type:</span> {getTypeOfBet()}{" "}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Bet Date:</span> {getCurrentDate()}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Teams:</span>
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Stadium:</span>
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Amount Bet:</span> {betValue}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Possible Earnings:</span>{" "}
                {potentialWin}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Current Status:</span>
              </p>
              <p className="text-gray-400 text-lg flex items-center">
                <span className="text-white mr-2">Betting History:</span>
                <Button
                  className="text-gray-400 text-lg bg-gray-800 hover:bg-gray-700 rounded-2xl flex items-center"
                  onClick={() => setShowHistory(true)} // Atualize o estado para mostrar o componente History quando o botão for clicado
                >
                  Access
                  <ArrowUpRight className="w-5 h-5 ml-2 text-gray-400" />
                </Button>
              </p>
            </div>
          </Card>
        </div>
      );
    } else if (selectedCard === "bonus") {
      return (
        <div className="container px-4">
          <Card
            id="bonus"
            className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none mx-auto"
          >
            <div className="text-left">
              <h2 className="text-white text-center justify-center font-bold text-3xl mb-2">
                {" "}
                Main Reward Information
              </h2>
              <p className="text-gray-400 text-lg mb-4">
                Dear user, in this field you can check if you are eligible to
                receive exclusive items from a draw on our platform. Just select
                the option below to check.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-lg text-black  font-bold rounded-2xl mt-4"
                onClick={() => redirectToBoxComponent()}
              >
                Verify
              </Button>
            </div>
          </Card>
        </div>
      );
    }
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
            <Card className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-4">
              <h3 className="text-white text-3xl font-bold mb-2">
                Bahia vs Vitória
              </h3>
              <p className="text-gray-400 text-lg">Initial Game</p>
              <div className="flex justify-between mt-4">
                <img src={Time2} alt="Time2" className="w-20 h-20" />
                <p className="text-gray-400 font-bold text-5xl mt-4"> 0 - 0</p>
                <img src={Time1} alt="Time1" className="w-20 h-20" />
              </div>
            </Card>
          </div>
          {/* Card 2 */}
          <div>
            {/* Conteúdo do card 2 */}
            <Card className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-4 ">
              {/* Frase */}
              <p className="text-white text-3xl font-bold mb-4">
                Step 1 - Select the type:
              </p>

              {/* Botões */}
              <div className="mb-4 flex justify-between">
                <div className="mr-2">
                  <Button
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2"
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
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2"
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
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2"
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
                <button className="bg-green-600 hover:bg-green-700  border-white text-black font-bold py-2 px-4 rounded-2xl w-full">
                  BET NOW
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div>
        {/* Botões para selecionar o card */}
        <div className="container px-4 p-4 mt-6">
          <Button
            className="bg-black hover:bg-black text-2xl border-none text-white font-bold py-2 px-4"
            onClick={() => handleButtonClick("summary")}
          >
            SUMMARY
          </Button>
          <Button
            className="bg-black hover:bg-black text-2xl border-none text-white font-bold py-2 px-4 ml-4"
            onClick={() => handleButtonClick("bonus")}
          >
            BONUS
          </Button>
        </div>

        {/* Renderização condicional do card selecionado */}
        {renderSelectedCard()}
      </div>

      {/* Adicionando um novo card abaixo do resumo da aposta */}
      <div className="container mx-auto px-4 p-2 mt-4">
        <Card className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-auto">
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
