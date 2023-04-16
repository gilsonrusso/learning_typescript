interface ISum {
    (numberOne: number, numberTwo: number): number;
}

const firstSum: ISum = ( numberOne: number, numberTwo: number ): number => {
    return numberOne + numberTwo;
}

interface Calculates {
    addition(a: number, b: number): number;
    subtraction(a: number, b: number): number;
    Multiplication(a: number, b: number): number;
    Division(a: number, b: number): number;
}

let calculators: Calculates;

calculators = {
    addition: (numberOne: number, numberTwo: number) => numberOne + numberTwo,
    subtraction: (numberOne: number, numberTwo: number) => numberOne - numberTwo,
    Multiplication: (numberOne: number, numberTwo: number) => numberOne * numberTwo,
    Division: (numberOne: number, numberTwo: number) => numberOne / numberTwo,
}


console.log(calculators.addition(2, 2));
