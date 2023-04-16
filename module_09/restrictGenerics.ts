interface IOther {
  length: number;
}

function showQuantity<T extends IOther>(value: T): T {
  console.log(`Total Quantity: ${value.length}`);

  return value;
}

console.log(showQuantity<Array<number>>([10, 20]));
