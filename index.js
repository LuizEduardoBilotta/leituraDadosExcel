const readXlsxFile = require('read-excel-file/node');

//Realizando leitura dos dados
readXlsxFile('./files/dados.xlsx').then(linhas => {
  console.log(linhas);
});

//Realizando leitura e iterando sobre os dados
readXlsxFile('./files/dados.xlsx').then(linhas => {
  for (const linha of linhas) {
    console.log(linha);
  }
});

//Realizando leitura dos nomes das planilhas
readXlsxFile('./files/dados.xlsx', { getSheets: true }).then(planilhas => {
  console.log(planilhas);
});

//Realizando leitura de dados de uma planilha específica
readXlsxFile('./files/dados.xlsx', { sheet: 'Endereços' }).then(linhas => {
  for (const linha of linhas) {
    console.log(linha);
  }
});