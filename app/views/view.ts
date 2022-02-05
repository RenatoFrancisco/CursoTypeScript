export abstract class View<T> {
    
    protected elemento: HTMLInputElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`Selector ${seletor} não existe no DOM.`)
        }
        
        if (this.escapar) {
            this.escapar = escapar as boolean;
        }

        this.escapar = escapar as boolean;
    }

    protected abstract template(model: T): string;
    
    public update(model: T): void {
        let template = this.template(model);

        if (this.escapar) {
            template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
    }
}