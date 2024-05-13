import React, { useState } from "react";
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
import { Radio } from "lucide-react";
import Swap from "../assets/swap.svg";
import Real from "../assets/real.svg";
import Bayern from "../assets/bayern.svg";
import Table from "../assets/table.svg";
import { ChevronDown } from "lucide-react";
import { UserRoundCheck } from "lucide-react";

export function Auth({ walletHash }) {
  const [showCards, setShowCards] = useState(true);
  const [showTable, setShowTable] = useState(false);

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
      <div className="bg-black flex flex-col items-center justify-center">
        {/* Título e botão do menu */}
        <div className="text-center mb-12">
          <h2 className="text-white text-5xl font-bold mt-8">
            Championships in progress
          </h2>
          <p className="text-gray-400 text-xl text-center mt-4 mb-4">
            Follow the best Brazilian championships{" "}
          </p>

          {/* Botões do menu */}
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
        {/* Condicionalmente renderizar os cards ou a tabela */}
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

        {/* Rodapé */}
        <div className="text-white text-center p-8">
          <h2 className="text-5xl font-bold">Bets</h2>
          <h3 className="text-xl mt-4 text-gray-400">Champions League</h3>
          <p className="text-gray-400 mt-2 font-bold text-5xl">
            Bayern vs Real Madrid
          </p>
        </div>

        {/* Colunas de cards */}
        <div className="container mx-auto px-4 p-6">
          <div className="md:flex md:justify-between">
            {/* Coluna da esquerda */}
            <div className="md:w-1/3">
              <div className="mb-4">
                {/* Card 1 */}
                <Card className="bg-gray-800 hover:bg-gray-700 text-white flex flex-col text-center p-8 border-none mx-4">
                  <h3 className="text-white text-3xl font-bold mb-2">
                    Bayern vs Real Madrid
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Semifinal - Game 1 of 2
                  </p>
                  <div className="flex justify-between mt-4">
                    <img src={Real} alt="Real" className="w-20 h-20" />
                    <p className="text-gray-400 font-bold text-5xl mt-4">
                      {" "}
                      2 - 1
                    </p>
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
              <h3 className="text-white text-3xl font-bold mb-2">
                Bet summary
              </h3>
              <p className="text-gray-400 text-lg">
                Bet summaries will be shown here. Type of bets, date, teams,
                values, etc.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
