import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 12, 100);
console.log(negociacao);
console.log(negociacao.volume);