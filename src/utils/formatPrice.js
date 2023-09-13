const formatPrice = (number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format((number / 100).toFixed(2));
};

export default formatPrice;
