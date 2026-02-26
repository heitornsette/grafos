function exibirMatrizAdjacenciaConsole() {
  console.log("Matriz de Adjacência Gerada:")
  console.table(gerarMatrizAdjacencia(estados, ligacoes))
}

function exibirMatrizTabela() {
  const matriz = gerarMatrizAdjacencia(estados, ligacoes)
  const container = document.querySelector("#modalConteudo")
  container.innerHTML = ""

  const tabelaMatriz = document.createElement("table")
  tabelaMatriz.className = "mx-auto m-4 border border-slate-300 text-xs"

  const cabecalhoTabela = document.createElement("thead")
  const linhaTitulosColunas = document.createElement("tr")

  const celulaCantoVazia = document.createElement("th")
  celulaCantoVazia.className = "border border-slate-300 bg-slate-100 p-1"
  linhaTitulosColunas.appendChild(celulaCantoVazia)

  estados.forEach(siglaEstado => {
    const thSiglaColuna = document.createElement("th")
    thSiglaColuna.className = "border border-slate-300 bg-slate-100 p-1 font-bold"
    thSiglaColuna.innerHTML = siglaEstado
    linhaTitulosColunas.appendChild(thSiglaColuna)
  })
  cabecalhoTabela.appendChild(linhaTitulosColunas)
  tabelaMatriz.appendChild(cabecalhoTabela)

  const corpoTabela = document.createElement("tbody")

  matriz.forEach((valoresDaLinha, indiceEstado) => {
    const linhaEstado = document.createElement("tr")

    const thSiglaLinha = document.createElement("th")
    thSiglaLinha.className = "border border-slate-300 bg-slate-100 p-1 font-bold text-left"
    thSiglaLinha.innerText = estados[indiceEstado]
    linhaEstado.appendChild(thSiglaLinha)

    valoresDaLinha.forEach(temConexao => {
      const tdValorConexao = document.createElement("td")
      tdValorConexao.className = `border border-slate-300 p-1 text-center ${temConexao === 1 ? "bg-blue-100 font-bold text-blue-700" : "text-slate-400"}`
      tdValorConexao.innerText = temConexao
      linhaEstado.appendChild(tdValorConexao)
    })

    corpoTabela.appendChild(linhaEstado)
  })

  tabelaMatriz.appendChild(corpoTabela)
  container.appendChild(tabelaMatriz)
}
