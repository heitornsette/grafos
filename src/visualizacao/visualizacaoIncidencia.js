function exibirMatrizIncidenciaTabela() {
  const matriz = gerarMatrizDeIncidencia(estados, ligacoes)
  const container = document.querySelector("#modalConteudo")
  container.innerHTML = ""

  const tabelaMatriz = document.createElement("table")
  tabelaMatriz.className =
    "mx-auto m-2 border border-slate-300 text-[10px] table-fixed"

  const cabecalhoTabela = document.createElement("thead")
  const linhaTitulosColunas = document.createElement("tr")

  const celulaCantoVazia = document.createElement("th")
  celulaCantoVazia.className = "border border-slate-300 bg-slate-100 p-1"
  linhaTitulosColunas.appendChild(celulaCantoVazia)

  ligacoes.forEach(([a, b], k) => {
    const thAresta = document.createElement("th")
    thAresta.className =
      "border border-slate-300 bg-slate-100 px-1 py-[2px] font-bold w-8 text-center"

    thAresta.innerText = `${a}-${b}`
    linhaTitulosColunas.appendChild(thAresta)
  })

  cabecalhoTabela.appendChild(linhaTitulosColunas)
  tabelaMatriz.appendChild(cabecalhoTabela)

  const corpoTabela = document.createElement("tbody")

  matriz.forEach((valoresDaLinha, indiceEstado) => {
    const linhaEstado = document.createElement("tr")

    const thSiglaLinha = document.createElement("th")
    thSiglaLinha.className =
      "border border-slate-300 bg-slate-100 p-[6px] font-bold text-left w-8"
    thSiglaLinha.innerText = estados[indiceEstado]
    linhaEstado.appendChild(thSiglaLinha)

    valoresDaLinha.forEach((valor) => {
      const td = document.createElement("td")
      td.className = `border border-slate-300 p-1 text-center w-8 ${valor === 1 ? "bg-blue-100 font-bold text-blue-700" : "text-slate-400"}`
      td.innerText = valor
      linhaEstado.appendChild(td)
    })

    corpoTabela.appendChild(linhaEstado)
  })

  tabelaMatriz.appendChild(corpoTabela)
  container.appendChild(tabelaMatriz)
}
