import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Bet } from "./Bet.tsx";

// Defina uma interface para os dados das partidas
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
  oddHome: number; // Adicione essa propriedade
  oddDraw: number; // Adicione essa propriedade
  oddAway: number; // Adicione essa propriedade
}

export function Games() {
  const [mostrarAposta, setMostrarAposta] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null); // Estado para armazenar o jogo selecionado

  useEffect(() => {
    // Função para obter as partidas da API de futebol
    async function obterPartidasDaAPI() {
      try {
        const response = await fetch(
          "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=71&season=2024",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "f644b8c9b8msh5573ca49d8aa27ep15d9d4jsn089687943fba", // Substitua pela sua chave de API real
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();

        const fixtures = data.response
          .filter((fixture: any) => fixture.fixture.status.short === "NS") // Filtra as partidas que não começaram
          .map((fixture: any) => ({
            hash: fixture.fixture.id.toString(),
            teamHome: fixture.teams.home.name,
            teamHomeLogo: fixture.teams.home.logo,
            teamAway: fixture.teams.away.name,
            teamAwayLogo: fixture.teams.away.logo,
            stadium: fixture.fixture.venue.name,
            city: fixture.fixture.venue.city,
            date: new Date(fixture.fixture.date).toLocaleString(),
            goalsHome: fixture.goals.home,
            goalsAway: fixture.goals.away,
            status: fixture.fixture.status.short,
            result:
              fixture.score.fulltime.home > fixture.score.fulltime.away
                ? 1
                : fixture.score.fulltime.home < fixture.score.fulltime.away
                ? 2
                : 0,
          }));

        // Atualize o estado com as partidas obtidas
        setMatches(fixtures);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    }

    // Chame a função para obter as partidas da API quando o componente for montado
    obterPartidasDaAPI();
  }, []); // Executar apenas uma vez, quando o componente é montado

  // Função para lidar com o clique no botão de aposta
  const handleBetClick = (match: Match) => {
    setSelectedMatch(match); // Armazena o jogo selecionado no estado
    setMostrarAposta(true); // Atualiza o estado para mostrar a interface de aposta
  };

  return (
    <div className="bg-black container mx-auto px-4">
      {!mostrarAposta && (
        <div className="text-center h-screen">
          <h2 className="text-4xl font-bold text-gray-400">Featured Game</h2>
          <p className="text-green-400 mt-4 font-bold text-7xl ">
            Brazilian Championship Series A
          </p>
          <h3 className="text-xl mt-4 mb-6 text-gray-400 ">
            Choose your team to bet on:
          </h3>
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-3 gap-4">
              {matches
                .filter((match) => match.status === "NS") // Filtra apenas as partidas com status NS
                .slice(0, 3)
                .map((match, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none"
                  >
                    <h3 className="text-white text-3xl font-bold mb-2 truncate">
                      {match.teamHome} vs {match.teamAway}
                    </h3>
                    <div className="text-gray-400 text-lg mb-2">
                      Estádio: {match.stadium}
                    </div>
                    <div className="text-gray-400 text-lg mb-2">
                      Cidade: {match.city}
                    </div>
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

                    <button
                      onClick={() => handleBetClick(match)} // Passa o jogo selecionado para a função de clique
                      className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-4"
                    >
                      BET
                    </button>
                  </Card>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {matches.slice(3, 6).map((match, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col text-center p-8 border-none"
                >
                  <h3 className="text-white text-3xl font-bold mb-2 truncate">
                    {match.teamHome} vs {match.teamAway}
                  </h3>
                  <div className="text-gray-400 text-lg mb-2">
                    Estádio: {match.stadium}
                  </div>
                  <div className="text-gray-400 text-lg mb-2">
                    Cidade: {match.city}
                  </div>
                  <div className="text-gray-400 text-lg mb-4">{match.date}</div>
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

                  <button
                    onClick={() => handleBetClick(match)} // Passa o jogo selecionado para a função de clique
                    className="bg-green-500 hover text-black font-bold py-2 px-4 rounded mt-4"
                  >
                    BET
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
      {mostrarAposta && <Bet match={selectedMatch} />}{" "}
      {/* Passa o jogo selecionado para a página de aposta */}
    </div>
  );
}
