import { Card } from "@/components/ui/card";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";

export function Games() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-white text-center p-8 ">
        <h2 className="text-5xl font-bold">Apostas</h2>
        <h3 className="text-xl mt-4 text-gray-400">Liga dos Campeões</h3>
        <p className="text-gray-400 mt-2 font-bold text-5xl">
          Bayern vs Real Madrid
        </p>
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
              <p className="text-gray-400 text-lg">Semifinal - Jogo 1 de 2</p>
              <div className="flex justify-between mt-4">
                <img src={Real} alt="Real" className="w-20 h-20" />
                <p className="text-gray-400 font-bold text-5xl mt-4">2 - 1</p>
                <img src={Bayern} alt="Bayern" className="w-20 h-20" />
              </div>
            </Card>
          </div>
          <div className="mb-4 ">
            {/* Card 2 */}
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
          <div className="mb-4">
            {/* Card 3 */}
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
        </div>

        {/* Coluna da direita */}
        <div className="md:w-2/3">
          {/* Card com o conteúdo do iframe */}
          <div className="mb-4 h-full flex flex-col justify-between">
            <Card className="bg-black text-white flex flex-col text-center p-8 border-none mx-4 h-full">
              {/* Conteúdo do iframe */}
              <div
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <iframe
                  id="sofa-standings-embed-83-58766"
                  src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/58766/standings/Brasileiro%20Serie%20A?widgetTitle=Brasileiro%20Serie%20A&showCompetitionLogo=true&v=2"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    backgroundColor: "black",
                  }}
                  scrolling="no"
                ></iframe>
                {/* Créditos do Sofascore */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "Arial, sans-serif",
                      textAlign: "left",
                      margin: 0,
                      color: "#fff",
                    }}
                  >
                    Classificação fornecida por{" "}
                    <a
                      target="_blank"
                      href="https://www.sofascore.com/"
                      style={{ color: "#fff" }}
                    >
                      Sofascore
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
