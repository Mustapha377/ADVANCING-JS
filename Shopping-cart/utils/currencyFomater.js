const formatted = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}); // "$10.50"

export default function currencyFomater(cents) {
  return formatted.format(cents / 100);
}
