//Realizando leitura de dados de todas as planilhas do arquivo
async function lerNomesPlanilhas() {
  return readXlsxFile('./files/dados.xlsx', { getSheets: true }).then(nomesPlanilhas => { return nomesPlanilhas });
}

async function lerDadosPlanilhas(planilha) {
  return readXlsxFile('./files/dados.xlsx', { sheet: planilha }).then(linhas => { return linhas });
}

function organizarDados(nomeDaPlanilha, dados) {
  const dadosPlanilhaOrganizados = new Object();

  dadosPlanilhaOrganizados.nome = nomeDaPlanilha;
  dadosPlanilhaOrganizados.cabecalho = dados[0];
  dadosPlanilhaOrganizados.dados = dados.slice(1);

  return dadosPlanilhaOrganizados;
}

async function processarDados() {
  const listaDePlanilhas = new Array();
  
  const nomePlanilhas = await lerNomesPlanilhas();

  for (const planilha of nomePlanilhas) {
    
    const dados = await lerDadosPlanilhas(planilha.name);
    listaDePlanilhas.push(organizarDados(planilha.name, dados));
  
  }

  console.log(listaDePlanilhas);
}

processarDados();