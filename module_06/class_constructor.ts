class Order {
  readonly id: number = new Date().getTime();

  constructor(
    private product: string,
    protected valueTotal: number,
    public deliveryForecast: Date
  ) {}
}

const myOrder = new Order("TV", 2.0, new Date("2023-05-01"));

console.log(myOrder);
