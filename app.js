const livros = require('./database');
//console.log(livros);

const moduleReadLine = require('readline-sync');

const entradaInicial = moduleReadLine.question('Deseja buscar um livro? S/N');

if(entradaInicial.toUpperCase() === 'S'){
    // mostra as categorias dos livros e pergunta qual categoria ele escolhe
    console.log("Essas são as categorias disponíveis: ");
    livros.map( (livros) => console.log(livros.categoria));

    const entradaCategoria = moduleReadLine.question('Qual categoria escolhida?');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

}else{
    //mostra todos os livros em ordem crescente pela quantidade de páginas
    const livrosOrdenados = livros.sort((a,b) => (a.paginas - b.paginas));
    
    console.table(livrosOrdenados);
}

