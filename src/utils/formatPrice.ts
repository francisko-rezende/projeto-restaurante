export function formatPrice(price: string) {
  const [reais, centavos] = price.split(".");

  return `R$ ${reais}${centavos ? `,${centavos}` : ""}`;
}
