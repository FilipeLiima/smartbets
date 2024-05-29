import { Card } from "@/components/ui/card";

export function History() {
  return (
    <div className="container px-4">
      <Card
        id="summary"
        className="bg-gray-900  text-white flex flex-col text-center p-8 border-none mx-auto"
      >
        <div className="text-left">
          <h2 className="text-white text-center justify-center font-bold text-3xl mb-2">
            Match History:
          </h2>
          {/* Tabela de histórico de correspondência */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-700 py-2 px-4">Data</th>
                <th className="border border-gray-700 py-2 px-4">
                  ID da Partida
                </th>
                <th className="border border-gray-700 py-2 px-4">Descrição</th>
                <th className="border border-gray-700 py-2 px-4">
                  Tipo de Aposta
                </th>
                <th className="border border-gray-700 py-2 px-4">
                  Valor Apostado
                </th>
                <th className="border border-gray-700 py-2 px-4">Status</th>
                <th className="border border-gray-700 py-2 px-4">Ganho</th>
              </tr>
            </thead>
            <tbody>
              {/* Aqui você pode adicionar as linhas com os dados da sua tabela */}
              <tr className="bg-gray-900 text-gray-400">
                <td className="border border-gray-700 py-2 px-4">01/01/2022</td>
                <td className="border border-gray-700 py-2 px-4">123456</td>
                <td className="border border-gray-700 py-2 px-4">
                  Descrição da partida
                </td>
                <td className="border border-gray-700 py-2 px-4">
                  Tipo de aposta
                </td>
                <td className="border border-gray-700 py-2 px-4">$100</td>
                <td className="border border-gray-700 py-2 px-4">Concluído</td>
                <td className="border border-gray-700 py-2 px-4">$200</td>
              </tr>
              {/* Adicione mais linhas conforme necessário */}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
