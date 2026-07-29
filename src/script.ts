type Product = {
  name: string;
  price: number;
  available: boolean;
};
function getProductInfo({ name, price, available }: Product): string {
  return `Товар: ${name}, Ціна: ${price} грн., В наявності: ${
    available ? "Так" : "Ні"
  }`;
}
