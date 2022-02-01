export class View {
    
    protected elemento: HTMLInputElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
}