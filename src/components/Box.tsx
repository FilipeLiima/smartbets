import React, { useState } from "react";
import { Gift, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Box() {
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [winner, setWinner] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const handleClaimReward = () => {
    // Lógica para verificar se o cliente é premiado
    const isWinner = Math.random() < 0.5; // Exemplo de lógica de premiação aleatória

    setWinner(isWinner);

    if (isWinner) {
      setRewardClaimed(true); // Define que o cliente é premiado
    } else {
      setShowCard(false); // Oculta o Card 1 se o cliente não for premiado
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-8">
        <h2 className="text-4xl mt-4 font-bold text-white">
          You got a surprise box!
        </h2>
        <p className="text-xl text-gray-400">
          Open the box and find out if you are a winner!
        </p>
      </div>
      {showCard && (
        <Card className="bg-gray-900 border-none w-[600px] h-[600px] p-8 flex flex-col items-center justify-center">
          {rewardClaimed ? (
            // Renderizar Card 2 apenas se o cliente for premiado
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="flex items-center justify-center">
                <p className="text-3xl text-gray-400 mb-2">Congratulations!!</p>
                <PartyPopper
                  size="30"
                  className="text-green-400 text-5xl ml-2 mb-2"
                />
              </div>
              <p className="text-3xl text-gray-400 mb-8">
                You win <span className="text-green-400 ">$500</span>
              </p>
              <Button className="bg-gray-500 hover:bg-gray-600 text-xl text-black font-bold py-3 px-6 rounded-2xl">
                Claim
              </Button>
            </div>
          ) : (
            // Renderizar Card 1 como padrão
            <>
              <Gift size="250" className="text-green-400 text-5xl mb-2" />
              <div className="flex flex-col items-center justify-center mb-4">
                <p className="text-xl text-gray-400 mb-2">
                  Click the button below and check
                </p>
                <p className="text-xl text-gray-400">
                  <span>if you are a winner!</span>
                </p>
              </div>
              <Button
                className="bg-gray-500 hover:bg-gray-600 text-xl text-black font-bold py-3 px-6 rounded-2xl"
                onClick={handleClaimReward}
              >
                Open Box
              </Button>
            </>
          )}
        </Card>
      )}
      {!showCard && (
        <Card className="bg-gray-900 border-none w-[600px] h-[600px] p-8 flex flex-col items-center justify-center">
          {/* Renderizar Card 3 quando o usuário não for premiado */}
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="text-3xl text-gray-400 mb-2">Sorry!</p>
            <div className="flex items-center justify-center">
              <p className="text-xl text-gray-400">It was not this time</p>
            </div>
          </div>
          <Button className="bg-gray-500 hover:bg-gray-600 text-xl text-black font-bold py-3 px-6 rounded-2xl">
            Close
          </Button>
        </Card>
      )}
    </div>
  );
}
