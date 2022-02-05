export abstract class View<T> {
    
    protected elemento: HTMLInputElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor) as HTMLInputElement;
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