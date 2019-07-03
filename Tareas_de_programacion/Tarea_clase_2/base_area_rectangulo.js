let readlineSync = require('readlineSync');
let base = readlineSync.questionint('ingrese la base: 10');
let altura = readlineSync.questionint('ingrese la altura: 20');
let area = base*altura;
console.log('el area es:', area);
