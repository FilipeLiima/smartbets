import { useParams } from "react-router-dom";
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
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";
import SwapIcon from "../assets/swap.svg";
import { ChevronDown } from "lucide-react";
import { UserRoundCheck } from "lucide-react";

export function Swap() {
  const { walletHash } = useParams();
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mt-8 mb-8 text-left">
        Defi betting
      </h1>
      <div className="flex justify-center">
        <Card className="bg-gray-900 border-none w-[650px] m-4 p-6">
          {/* Card 1 */}
          <Button className="bg-green-600 hover:bg-green-700 text-lg text-black font-bold py-2 px-4 rounded-2xl mb-4 flex items-center">
            <UserRoundCheck className="mr-2 h-5 w-5 text-black" />
            {walletHash ? walletHash : "Connected wallet"}
          </Button>
          <h2 className="text-white font-bold mb-4 text-3xl">
            Access staking by swapping USDT or purchasing the network's native
            token.
          </h2>
          <img src={SwapIcon} alt="Swap" className="mb-4" />
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
                placeholder="You pay"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl">
                    USDT
                    <ChevronDown className="ml-2 h-5 w-5 text-white inline-block" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900 border-none text-lg text-white">
                  <DialogHeader>
                    <DialogTitle>Selecione um token</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative">
                      <Search className="text-white absolute left-2 top-3 w-5 h-4" />
                      <Input
                        id="amount"
                        className="bg-gray-800 border-gray-700 text-white text-lg py-2 px-8 rounded w-full"
                        placeholder="Pesquise o nome"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl"
                    >
                      Fechar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Ícone */}
          <div className="flex justify-center mb-2 mt-2">
            <ArrowRightLeft className="text-white w-8 h-8" />
          </div>

          {/* Segundo Card */}
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <Input
                className="bg-gray-800 border-gray-700 text-white font-bold py-2 px-4 rounded-2xl p-12 text-xl"
                placeholder="You receive"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-600 text-lg text-white font-bold py-2 px-4 rounded-2xl">
                    USDT
                    <ChevronDown className="ml-2 h-5 w-5 text-white inline-block" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900 border-none text-lg text-white">
                  <DialogHeader>
                    <DialogTitle>Selecione um token</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative">
                      <Search className="text-white absolute left-2 top-3 w-5 h-4" />
                      <Input
                        id="amount"
                        className="bg-gray-800 border-gray-700 text-white text-lg py-2 px-8 rounded w-full"
                        placeholder="Pesquise o nome"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl"
                    >
                      Fechar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-black text-xl font-bold py-2 px-4 rounded-2xl w-full p-6 mt-5">
              SWAP
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
