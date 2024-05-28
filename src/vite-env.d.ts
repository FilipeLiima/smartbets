/// <reference types="vite/client" />

// Definição da interface Token
interface Token {
  name: string;
  id: string;
  // outras propriedades, se houver
}
// Estendendo a interface global do Window para incluir ethereum
interface Window {
  ethereum?: any;
}
