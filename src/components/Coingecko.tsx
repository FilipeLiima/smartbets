import React, { useState, useEffect } from "react";
import axios from "axios";

export function CoinGeckoTest() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    // Função para obter os tokens da API do CoinGecko
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setTokens(response.data);
      } catch (error) {
        console.error("Erro ao obter tokens:", error);
      }
    };

    // Chama a função para obter os tokens quando o componente for montado
    fetchTokens();
  }, []);

  return (
    <div>
      <h1>Lista de Tokens da API do CoinGecko</h1>
      <ul>
        {tokens.map((token) => (
          <li key={token.id}>{token.name}</li>
        ))}
      </ul>
    </div>
  );
}
