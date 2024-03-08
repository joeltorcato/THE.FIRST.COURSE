const fs = require('fs');
const path = require('path');

/* CRIA UMA PASTA
fs.mkdir(path.join(__dirname, '/test'), (error) => {
  if (error) {
    return console.error('Erro: ', error);
  }

  console.log('pasta criado com sucesso!');
}) */

// CRIA UM ARQUIVO

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
  if (error) {
    return console.error('Erro: ', error);
  }

  console.log('arquivo criado com sucesso!');
});

// ADICIONA CONTEÚDO AO ARQUIVO
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' hello word!', (error) => {
  if (error) {
    return console.error('Erro: ', error);
  }

  console.log('arquivo modificado com sucesso!');
});

// LÊ UM ARQUIVO
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
  if (error) {
    return console.error('Erro: ', error);
  }

  console.log(data);
});