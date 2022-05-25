const readXlsxFile = require('read-excel-file/node');

//Realizando leitura dos dados
readXlsxFile('./files/dados.xlsx').then(rows => {
  for (const linha of rows) {
    console.log(linha);
  }
});

//Realizando leitura dos nomes das planilhas
readXlsxFile('./files/dados.xlsx', { getSheets: true }).then(sheets => {
  console.log(sheets);
});


