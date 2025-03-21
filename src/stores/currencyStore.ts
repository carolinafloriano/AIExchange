// Armazena as taxas de câmbio, moeda base, e lógica para atualizar essas taxas.
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getExchangeRates } from '@/api/currencyService';
import type { ExchangeRates } from '@/types/currency';




export const useCurrencyStore = defineStore('currency', () => {
  const rates = ref<ExchangeRates>({});
  const baseCurrency = ref('USD');

  const fetchRates = async () => {
    const data = await getExchangeRates(baseCurrency.value);
    rates.value = data.conversion_rates;
  };

  return { rates, baseCurrency, fetchRates };
});
