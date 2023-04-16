class Bank {
    private accountValue: number = 100000;

    private withdrawFromTheVault(quantity: number, from: string): string  {
        if (quantity < this.accountValue ) {
            this.accountValue -= quantity;
            return `You Balance is:  ${this.accountValue} and you WithDraw the quantity: ${quantity} from ${from}`;
        } else {
            return "You don't have balance.";
        }
    }

    public withdrawFromTheCashier(quantity: number, from: string): string {
        return this.withdrawFromTheVault(quantity, from);
    }
}

class Bank24Hours extends Bank {
    withdraw(quantity: number, from: string): string {
        return this.withdrawFromTheCashier(quantity, from);
    }
}

const myBank = new Bank();
const bank24Hours = new Bank24Hours();

console.log(myBank.withdrawFromTheCashier(100, 'myBank'));
console.log(bank24Hours.withdraw(500, 'bank24Hours'));

