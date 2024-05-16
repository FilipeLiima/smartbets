import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import Table from "../assets/table.svg";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";

export function Games() {
  const [showCards, setShowCards] = useState(true);
  const [showTable, setShowTable] = useState(false);
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-white text-5xl font-bold mt-8">
          Championships in progress
        </h2>
        <p className="text-gray-400 text-xl text-center mt-4 mb-4">
          Follow the best Brazilian championships{" "}
        </p>
        <div className="flex justify-center mt-6">
          <Button
            className={`${
              showCards ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"
            } text-white font-bold py-2 px-4 text-xl rounded text-center mr-6`}
            onClick={() => {
              setShowCards(true);
              setShowTable(false);
            }}
          >
            Championships
          </Button>
          <Button
            className={`${
              showTable ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700 "
            } text-white font-bold py-2 px-4 text-xl rounded text-center`}
            onClick={() => {
              setShowCards(false);
              setShowTable(true);
            }}
          >
            Game table
          </Button>
        </div>
      </div>
      {showCards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center mx-auto max-w-[1400px] p-8">
          {/* Card 1 */}
          <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
            <div className="flex justify-start mb-2 items-center">
              <Radio className="mr-2 h-5 w-5 text-green-600" />
              <p className="text-white text-lg font-bold">Live</p>
            </div>
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

          {/* Card 2 */}
          <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
            <div className="flex justify-start mb-2 items-center">
              <Radio className="mr-2 h-5 w-5 text-green-600" />
              <p className="text-white text-lg font-bold">Live</p>
            </div>
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

          {/* Card 3 */}
          <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
            <div className="flex justify-start mb-2 items-center">
              <Radio className="mr-2 h-5 w-5 text-green-600" />
              <p className="text-white text-lg font-bold">Live</p>
            </div>
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
      )}
      {showTable && (
        <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
          <h3 className="text-white text-3xl font-bold mb-2"></h3>
          <img src={Table} alt="Table" className="w-50 h-50 mx-auto mb-4" />
        </div>
      )}
      <div className="text-white text-center p-8">
        <h2 className="text-5xl font-bold">Bets</h2>
        <h3 className="text-xl mt-4 text-gray-400">Champions League</h3>
        <p className="text-gray-400 mt-2 font-bold text-5xl">
          Bayern vs Real Madrid
        </p>
      </div>
    </div>
  );
}
