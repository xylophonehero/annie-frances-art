export function FormatPrice(amount, currency)
{

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format((amount / 100).toFixed(2));
}