'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const [ratesFetched, setRatesFetched] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/9321fb9f127eb2eb1200a05b/latest/USD`
      );
      const data = await response.json();
      setRates(data.conversion_rates);
      setRatesFetched(true);
    };

    fetchRates();
  }, []);

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return amount;
    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    return convertedAmount;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, rates, ratesFetched, convertCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
