'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useCurrency } from '../../contexts/CurrencyContext'; // Assuming CurrencyContext is in the same directory
import { Combobox } from './ComboBox';

// Major world currencies
const majorCurrencies = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'AUD', label: 'AUD' },
  { value: 'JPY', label: 'JPY' },
  { value: 'CNY', label: 'CNY' },
  { value: 'INR', label: 'INR' },
  { value: 'CAD', label: 'CAD' },
  { value: 'CHF', label: 'CHF' },
  { value: 'NZD', label: 'NZD' },
  { value: 'AED', label: 'AED' },
];

// Flag URLs for major world currencies
const flags = {
  USD: 'https://flagcdn.com/w320/us.png',
  EUR: 'https://flagcdn.com/w320/eu.png',
  GBP: 'https://flagcdn.com/w320/gb.png',
  AUD: 'https://flagcdn.com/w320/au.png',
  JPY: 'https://flagcdn.com/w320/jp.png',
  CNY: 'https://flagcdn.com/w320/cn.png',
  INR: 'https://flagcdn.com/w320/in.png',
  CAD: 'https://flagcdn.com/w320/ca.png',
  CHF: 'https://flagcdn.com/w320/ch.png',
  NZD: 'https://flagcdn.com/w320/nz.png',
  AED: 'https://flagcdn.com/w320/ae.png',
};

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  return (
    <div className={`rounded-full hover:border-primaryMain`}>
      {/* Combobox for selecting currency */}
      <Combobox
        options={majorCurrencies}
        value={currency}
        onValueChange={handleCurrencyChange}
        images={flags}
      />
    </div>
  );
}
