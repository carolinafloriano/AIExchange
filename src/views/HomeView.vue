<!-- Tela inicial com a conversão de moedas em tempo real. É o foco do app. -->
<template>
    <v-container>
      <v-card class="pa-5">
        <v-row>
          <v-col cols="5">
            <v-text-field v-model="amount" label="Valor" type="number"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select v-model="fromCurrency" :items="currencyList" label="De"></v-select>
          </v-col>
          <v-col cols="3">
            <v-select v-model="toCurrency" :items="currencyList" label="Para"></v-select>
          </v-col>
          <v-col cols="1">
            <v-btn color="primary" @click="convert">🔄</v-btn>
          </v-col>
        </v-row>
        <v-alert v-if="convertedValue !== null" type="info">
          {{ amount }} {{ fromCurrency }} = {{ convertedValue }} {{ toCurrency }}
        </v-alert>  
        

      </v-card>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
import { useCurrencyStore } from '@/stores/currencyStore';

const store = useCurrencyStore();

const amount = ref(1);
const fromCurrency = ref('USD');
const toCurrency = ref('EUR');

onMounted(() => {
  store.fetchRates();
});

const currencyList = computed(() => Object.keys(store.rates));

// Corrigido: resultado da conversão como ref, não computed
const convertedValue = ref<number | null>(null);

const convert = () => {
  const rate = store.rates[toCurrency.value];
  if (rate) {
    convertedValue.value = parseFloat((amount.value * rate).toFixed(2));
  } else {
    convertedValue.value = null;
  }
};

  </script>
  