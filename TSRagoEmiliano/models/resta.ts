export class Resta {

    private numeroA: number;
    private numeroB: number;

    constructor(numA: number, numB: number) {
        this.numeroA = numA;
        this.numeroB = numB;
    }

    resultado(): number {
        return this.numeroA - this.numeroB;
    }
}