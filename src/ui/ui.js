function atualizarBotoes(botaoAtivo) {
  const botoes = {
    lista: document.getElementById("btnLista"),
    adjacencia: document.getElementById("btnAdjacencia"),
    incidencia: document.getElementById("btnIncidencia"),
  }

  Object.entries(botoes).forEach(([tipo, botao]) => {
    if (tipo === botaoAtivo) {
      botao.classList.remove("bg-slate-100", "text-slate-700")
      botao.classList.add("bg-blue-600", "text-white")
    } else {
      botao.classList.remove("bg-blue-600", "text-white")
      botao.classList.add("bg-slate-100", "text-slate-700")
    }
  })
}

function selecionarVisualizacao(tipo) {
  if (tipo === "lista") {
    renderizarGrafo()
  }

  if (tipo === "adjacencia") {
    exibirMatrizTabela()
    exibirMatrizAdjacenciaConsole()
  }

  if (tipo === "incidencia") {
    exibirMatrizIncidenciaTabela()
    exibirMatrizIncidenciaConsole()
  }

  atualizarBotoes(tipo)
}
