// Calculate Total Price in a Shopping Cart
const cart = [
  { item: "Book", price: 23 },
  { item: "Eth", price: 19393 },
  { item: "Bitcoin", price: 294939 },
];

const total = cart.reduce((acc, cur) => {
  return acc + cur?.price;
}, 0);

console.log(`Total price: ${total}`);
