import { useCurrency } from '../../contexts/CurrencyContext'; // Assuming CurrencyContext is in the same directory

const PriceDisplay = ({ priceInUSD }) => {
  const { currency, convertCurrency } = useCurrency();
  const convertedPrice = convertCurrency(priceInUSD, 'USD', currency);
  return <div>{`Price in ${currency}: ${convertedPrice.toFixed(2)}`}</div>;
};
