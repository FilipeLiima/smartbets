import { Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";

export function Games() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-white text-center p-8">
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
          <div className="mb-4">
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
          {/* Card 3 */}
          <div className="mb-4 h-full flex flex-col justify-between">
            {/* Conteúdo do card 3 */}
            <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4 h-full"></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
