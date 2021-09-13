export class Constants {

    public static get baseServidor(): string {return "http://localhost:8080/"}

    public static get getBaseUrlPath(): string {return this.baseServidor + "meusite/"}
}
