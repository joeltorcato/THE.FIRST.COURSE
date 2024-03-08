const path = require('path');

// APENAS O NOME DO ARQUIVO ATUAL
console.log(path.basename(__filename));

// NOME DO DIRETÓRIO ATUAL
console.log(path.dirname(__filename));

// EXTENSÃO DO ARQUIVO
console.log(path.extname(__filename));

// CRIA UM OBJETO COM O PATH
console.log(path.parse(__filename));

// CONCATENA PATHS
console.log(path.join(__dirname, 'test', 'test.html'));