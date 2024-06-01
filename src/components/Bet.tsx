import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box } from "./Box.tsx";
import { History } from "./History";

interface Match {
  hash: string;
  teamHome: string;
  teamHomeLogo: string;
  teamAway: string;
  teamAwayLogo: string;
  stadium: string;
  city: string;
  date: string;
  goalsHome: number;
  goalsAway: number;
  status: string;
  result: number;
  oddHome: number;
  oddDraw: number;
  oddAway: number;
}

interface BetProps {
  match: Match | null;
}

export function Bet({ match }: BetProps) {
  const [betValue, setBetValue] = useState<number>(0);
  const [selectedOdds, setSelectedOdds] = useState<number>(1);
  const [potentialWin, setPotentialWin] = useState<number>(0);
  const [redirectToBox, setRedirectToBox] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState("summary");
  const [showHistory, setShowHistory] = useState(false);
  const [oddsData, setOddsData] = useState<any[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setBetValue(value);

    if (selectedOdds !== 1) {
      const potentialWin = selectedOdds * value;
      setPotentialWin(parseFloat(potentialWin.toFixed(2)));
    }
  };

  const handleOddsSelect = (odds: number) => {
    setSelectedOdds(odds);

    if (odds !== null) {
      const selectedMatchOdds = oddsData.find(
        (odds: any) => odds.fixture.id === match?.hash
      );

      if (selectedMatchOdds) {
        const matchWinnerOdds = selectedMatchOdds.bookmakers.find(
          (bookmaker: any) => bookmaker.name === "Match Winner"
        );

        if (matchWinnerOdds) {
          const selectedOdd = matchWinnerOdds.bets
            .find(
              (bet: any) => bet.id === 1 // Assumindo que "Match Winner" tem o id 1
            )
            .values.find((value: any) => parseFloat(value.odd) === odds);

          if (selectedOdd) {
            const potentialWin = parseFloat(selectedOdd.odd) * betValue;
            setPotentialWin(Number(potentialWin.toFixed(2)));
          }
        }
      }
    }
  };

  const renderOddsButtons = () => {
    // Verificar se há dados de odds disponíveis
    if (!Array.isArray(oddsData)) {
      return null;
    }

    // Procurar as odds para a partida selecionada
    const selectedMatchOdds = oddsData.find(
      (odds: any) => odds.fixture.id === match?.hash
    );

    // Se não houver odds disponíveis para a partida selecionada
    if (!selectedMatchOdds) {
      // Definir as odds padrão
      const defaultOdds = [
        { value: "Home", odd: "1.83" },
        { value: "Draw", odd: "2.90" },
        { value: "Away", odd: "4.75" },
      ];

      // Retornar os botões de odds com as odds padrão
      return defaultOdds.map((value: any, index: number) => (
        <div key={index} className="mr-2">
          <Button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2"
            onClick={() => handleOddsSelect(parseFloat(value.odd))}
          >
            {getTeamName(parseFloat(value.odd))} - {value.odd}
          </Button>
          <div className="text-gray-500">
            <p>{getTeamName(parseFloat(value.odd))}</p>
          </div>
        </div>
      ));
    }
  };

  const getTeamName = (odds: number) => {
    switch (odds) {
      case 4.5:
        return "Bayern";
      case 1.34:
        return "Draw";
      case 8.75:
        return "Real Madrid";
      default:
        return "";
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ls.soccersapi.com/widget/res/w_custom/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const obterOddsDaAPI = async () => {
      try {
        const oddsResponse = await fetch(
          "https://api-football-v1.p.rapidapi.com/v3/odds?league=71&season=2024",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "f644b8c9b8msh5573ca49d8aa27ep15d9d4jsn089687943fba",
            },
          }
        );

        if (!oddsResponse.ok) {
          throw new Error(
            "Network response was not ok " + oddsResponse.statusText
          );
        }

        const oddsData = await oddsResponse.json();
        console.log("oddsData:", oddsData);

        if (oddsData && oddsData.response && oddsData.response.length > 0) {
          const matchOdds = oddsData.response.find((odds: any) => {
            return odds.fixture.id === match?.hash;
          });

          if (matchOdds) {
            // Encontrou as odds para a partida selecionada
            const allOdds: {
              bookmaker: string;
              bet: string;
              value: string;
              odd: string;
            }[] = [];

            // Iterar sobre os bookmakers e suas respectivas apostas
            matchOdds.bookmakers.forEach(
              (bookmaker: { name: string; bets: any[] }) => {
                bookmaker.bets.forEach(
                  (bet: { name: string; values: any[] }) => {
                    bet.values.forEach(
                      (value: { value: string; odd: string }) => {
                        allOdds.push({
                          bookmaker: bookmaker.name,
                          bet: bet.name,
                          value: value.value,
                          odd: value.odd,
                        });
                      }
                    );
                  }
                );
              }
            );

            // Atualizar o estado com todas as odds disponíveis
            setOddsData(allOdds);
            return;
          }
        }
        // Se não houver odds disponíveis para a partida selecionada
        setOddsData([]);
      } catch (error) {
        console.error("Erro ao obter dados das odds da API:", error);
      }
    };
    obterOddsDaAPI();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };

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

  const handleButtonClick = (cardType: string) => {
    setSelectedCard(cardType);
  };

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
                <span className="text-white">Teams:</span> {match?.teamHome} vs{" "}
                {match?.teamAway}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Stadium:</span> {match?.stadium}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Amount Bet:</span> {betValue}
              </p>
              <p className="text-gray-400 text-lg">
                <span className="text-white">Possible Earnings:</span>{" "}
                {potentialWin}
              </p>
              <p className="text-gray-400 text-lg flex items-center">
                <span className="text-white mr-2">Betting History:</span>
                <Button
                  className="text-gray-400 text-lg bg-gray-800 hover:bg-gray-700 rounded-2xl flex items-center"
                  onClick={() => setShowHistory(true)}
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

  const redirectToBoxComponent = () => {
    setRedirectToBox(true);
  };

  if (redirectToBox) {
    return <Box />;
  }

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
        <div className="md:w-1/3">
          <div className="mb-4 ">
            {match && (
              <Card className="bg-gray-900 text-white flex flex-col text-center p-8 border-none mx-4">
                <h3 className="text-white text-3xl font-bold mb-2 truncate">
                  {match.teamHome} vs {match.teamAway}
                </h3>
                <div className="text-gray-400 text-lg mb-4">
                  Data partida: {match.date}
                </div>
                <div className="flex justify-between items-center mt-4 mb-4">
                  <img
                    src={match.teamHomeLogo}
                    alt={match.teamHome}
                    className="w-20 h-20"
                  />
                  <p className="text-gray-400 font-bold text-5xl mt-4">
                    {match.goalsHome} - {match.goalsAway}
                  </p>
                  <img
                    src={match.teamAwayLogo}
                    alt={match.teamAway}
                    className="w-20 h-20"
                  />
                </div>
              </Card>
            )}
            {!match && <p>No match selected</p>}
          </div>
          <div>
            <Card className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-4 ">
              <p className="text-white text-3xl font-bold mb-4">
                Step 1 - Select the odds:
              </p>
              <p className="text-gray-500 text-xl  mb-4">Home - Draw - Away</p>
              <div className="mb-4 flex justify-between">
                {renderOddsButtons()}
              </div>
            </Card>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="mb-4 h-full flex flex-col justify-between">
            <Card className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-4 h-full">
              <p className="text-white text-3xl font-bold  mb-2">
                Step 2 – Enter the value::{" "}
              </p>
              <div className="flex-1 flex flex-col justify-center items-center">
                <Input
                  type="number"
                  value={betValue}
                  onChange={handleInputChange}
                  className="bg-gray-800 hover:bg-gray-700 text-white p-8 rounded-2xl border-none "
                  placeholder="Enter the bet amount"
                />
              </div>
              <p className="text-gray-400 text-7xl font-bold text-center mb-6">
                You can win: ${potentialWin}
              </p>
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
        {renderSelectedCard()}
      </div>
      <div className="container mx-auto px-4 p-2 mt-4">
        <Card className="bg-gray-900 text-white flex flex-col text-center p-8 border-none mx-auto">
          <h3 className="text-white text-3xl p-4 font-bold mb-4">
            Real-Time Statistics
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <!-- LIVESCORE WIDGET SOCCERSAPI.COM -->
      <div id="ls-widget" data-w="w_custom" data-height="1200" data-url="https://ls.soccersapi.com/leagues/brazil/brasileiro-serie-a/1358?w=w_custom" data-theme="Dark Mode" class="livescore-widget"></div>
      <script type="text/javascript" src="https://ls.soccersapi.com/widget/res/awo_w5347_6659cded66400/widget.js"></script>
      <!-- LIVESCORE WIDGET SOCCERSAPI.COM -->
    `,
            }}
          />
        </Card>
      </div>
    </div>
  );
}
