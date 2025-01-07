import { useCurrency } from '../../contexts/CurrencyContext'; // Assuming CurrencyContext is in the same directory

export const PriceDisplay = ({ priceInUSD }) => {
  const { currency, convertCurrency } = useCurrency();
  const convertedPrice = convertCurrency(priceInUSD, 'USD', currency);
  return <div>{`${convertedPrice.toFixed(2)} ${currency}`}</div>;
};
