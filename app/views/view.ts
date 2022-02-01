export class View<T> {
    
    protected elemento: HTMLInputElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(model: T): string {
        throw Error('Classe filha precisa implementar o método template');
    }
    
    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }
}