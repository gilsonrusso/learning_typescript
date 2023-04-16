interface IProcessData<TypeInter> {
  value: TypeInter;
  processing(arg: TypeInter): TypeInter;
}

const str: IProcessData<string> = {
  value: "hello",
  processing(arg: string): string {
    return arg.toUpperCase();
  },
};

console.log(str.value);
console.log(str.processing("Gilson Russo"));

const strNumber: IProcessData<number> = {
  value: 32,
  processing(arg: number): number {
    return arg * 2;
  },
};
console.log(strNumber.value);
console.log(strNumber.processing(25));
