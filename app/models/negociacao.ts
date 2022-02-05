export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) { }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static CriaDe(dataInput: string, quatidadeInput: string, valorInput: string) {
        const exp = /-g/;
        const date = new Date(dataInput.replace(exp, ','));
        const quantidade = parseInt(quatidadeInput);
        const valor = parseFloat(valorInput);

        return new Negociacao(date, quantidade, valor);
    }
}