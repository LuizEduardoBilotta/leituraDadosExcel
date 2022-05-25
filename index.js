const readXlsxFile = require('read-excel-file/node');

//Realizando leitura dos dados
readXlsxFile('./files/cadastro_estabelecimentos_cnes.xlsx').then(rows => {
  console.log(rows);
});


