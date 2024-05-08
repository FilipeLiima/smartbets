import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";
import Swap from "../assets/swap.svg";
import { ChevronDown } from "lucide-react";

export function Auth({ walletHash }) {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-5xl font-bold mb-8 text-left">
        Defi betting
      </h1>

      <div className="flex justify-center">
        <Card className="bg-gray-900 border-none w-[650px] m-4 p-6">
          {/* Card 1 */}
          <Button className="bg-green-600 hover:bg-green-700 text-lg text-black font-bold py-2 px-4 rounded-2xl mb-4">
            {walletHash ? walletHash : "Connected wallet"}
          </Button>

          <h2 className="text-white font-bold mb-4 text-3xl">
            Access staking by swapping USDT or purchasing the network's native
            token.
          </h2>
          <img src={Swap} alt="Swap" className="mb-4" />
        </Card>

        <Card className="bg-gray-900 border-none w-[650px] m-4 p-6">
          {/* Card 2 */}
          <h2 className="text-white font-bold text-left text-3xl mb-12">
            Swap to start betting on your favorite team.
          </h2>
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <Input
                className="bg-gray-800 border-gray-700 text-white font-bold py-2 px-4 rounded-2xl p-12 text-xl"
                placeholder="Você paga"
              />
              <Button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl">
                USDT
                <ChevronDown className="ml-2 h-5 w-5 text-white inline-block" />
              </Button>
            </div>
          </div>

          {/* Ícone */}
          <div className="flex justify-center mb-2 mt-2">
            <ArrowRightLeft className="text-white w-8 h-8" />
          </div>

          {/* Segundo Card */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-full relative">
              <Input
                className="bg-gray-800 border-gray-700 text-white font-bold py-2 px-4 rounded-2xl p-12 text-xl"
                placeholder="Você recebe"
              />
              <Button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl">
                USDT
                <ChevronDown className="ml-2 h-5 w-5 text-white inline-block" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-black text-xl font-bold py-2 px-4 rounded-2xl w-full p-6">
              SWAP
            </Button>
          </div>
        </Card>
      </div>

      <h2 className="text-white text-3xl font-bold mt-8">
        Campeonatos em andamento
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mx-auto max-w-[1400px] p-8">
        {/* Card 1 */}
        <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none">
          <h3 className="text-white text-3xl font-bold mb-2">Campeonato 1</h3>
          <p className="text-gray-400 text-lg">Descrição do Campeonato 1</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none">
          <h3 className="text-white text-3xl font-bold mb-2">Campeonato 2</h3>
          <p className="text-gray-400 text-lg">Descrição do Campeonato 2</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none">
          <h3 className="text-white text-3xl font-bold mb-2">Campeonato 3</h3>
          <p className="text-gray-400 text-lg">Descrição do Campeonato 3</p>
        </div>
      </div>

      <h2 className="text-white text-3xl font-bold">Apostas</h2>
    </div>
  );
}
