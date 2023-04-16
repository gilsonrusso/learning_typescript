function showMessage(text: string | number): boolean {
    console.log(text);
    return true;
}

console.log(showMessage('Hello Gilson Russo'));
console.log(showMessage(10));


const showRequired = (code: number): number | Date | object => {
    return new Date().getFullYear
}

const numberDefault = (code: number = 0): number | Date | object => {
    return new Date().getFullYear
}

const codeOptional = (code?: number): number | Date | object => {
    return new Date().getFullYear
}