//Centraliza as chamadas à API de conversão de moedas. É onde você organiza funções como “buscar taxa atual”, “converter moedas” etc.

const API_KEY = 'SUA_CHAVE_AQUI';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export const getExchangeRates = async (baseCurrency: string) => {
  const response = await fetch(`${BASE_URL}/latest/${baseCurrency}`);
  return response.json();
};
