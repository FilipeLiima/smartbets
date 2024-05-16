import { Card } from "@/components/ui/card";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";

export function Bet() {
  return (
    <div className="container mx-auto px-4 ">
      <div className="text-white text-center p-8">
        <h2 className="text-5xl font-bold">Bets</h2>
        <h3 className="text-xl mt-4 text-gray-400">Champions League</h3>
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
              <p className="text-white text-xl mb-4 ">Place your bet!</p>

              {/* Botões */}
              <div className="mb-4 flex justify-between">
                <div className="mr-2">
                  <button className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-2xl mb-2">
                    4.50
                  </button>
                  {/* Informações abaixo do botão 1 */}
                  <div className="text-gray-500">
                    <p>Bayern</p>
                  </div>
                </div>

                <div className="mr-2">
                  <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2">
                    1.34
                  </button>
                  {/* Informações abaixo do botão 2 */}
                  <div className="text-gray-500">
                    <p>Draw</p>
                  </div>
                </div>

                <div>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mb-2">
                    8.75
                  </button>
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
              <p className="text-white text-xl mb-12">You are betting: </p>
              {/* Valor grande */}
              <div className="flex-1 flex flex-col justify-center items-center mb-2">
                <p className="text-9xl font-bold">$ 10</p>
              </div>
              {/* Frase abaixo do valor */}
              <p className="text-green-600 text-xl text-center mb-4">
                You can earn $45
              </p>
              {/* Botão */}
              <div className="mt-auto">
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
        <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
          {/* Conteúdo do novo card */}
          <h3 className="text-white text-3xl font-bold mb-2">Bet summary</h3>
          <p className="text-gray-400 text-lg">
            Bet summaries will be shown here. Type of bets, date, teams, values,
            etc.
          </p>
        </Card>
      </div>
    </div>
  );
}
