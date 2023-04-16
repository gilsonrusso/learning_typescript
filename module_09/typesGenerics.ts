function Order<T>(items: T[]): T[] {
  return items.map((item) => item);
}

console.log(Order(["a", "b", "c"]));
