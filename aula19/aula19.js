const prompt = require('prompt-sync')();

/* atributos do objeto filme: TITULO, ANO, GENERO, DIRETOR, ATOR, DURAÇÃO */

class Filmes{
constructor(){
    this.titulo = "";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.atores = [];
    this.duracao = 0;

}
    
}
        let click = new Filmes();
        click.titulo = prompt("Digite o nome do filme: ");
        click.ano = +prompt("Digite o ano de lançamento do filme: ");
        click.genero = prompt("Digite o genero do filme: ");
        click.diretor = prompt("Digite o nome do diretor: ");
        click.atores = prompt("digite o nome dos atores: " );
        click.duracao = +prompt("Digite a duração do filme: ");


console.log(click)