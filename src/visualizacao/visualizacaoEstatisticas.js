function gerarListaEstadosComVizinhos(estadosComMesmoGrau, vizinhosPorEstado) {
  return estadosComMesmoGrau
    .map((estado) => `${estado}: ${vizinhosPorEstado[estado].join(", ")}`)
    .join("<br>")
}

function gerarBarrasHistograma(frequenciaGraus) {
  const grausOrdenados = Object.keys(frequenciaGraus)
    .map(Number)
    .sort((a, b) => a - b)

  const maiorFrequencia = Math.max(...Object.values(frequenciaGraus))

  return grausOrdenados
    .map((grau) => {
      const frequencia = frequenciaGraus[grau]
      const largura = Math.max((frequencia / maiorFrequencia) * 100, 10)

      return `
        <div class="space-y-1">
          <div class="flex justify-between text-xs text-slate-600">
            <span>Grau ${grau}</span>
            <span>${frequencia} estado(s)</span>
          </div>
          <div class="w-full bg-slate-100 rounded h-5 overflow-hidden">
            <div class="bg-blue-500 h-full rounded" style="width: ${largura}%"></div>
          </div>
        </div>
      `
    })
    .join("")
}

function exibirEstatisticas() {
  const estatisticas = calcularEstatisticasGraus(estados, ligacoes)

  const container = document.querySelector("#modalConteudo")
  const barrasHistograma = gerarBarrasHistograma(estatisticas.frequenciaGraus)

  container.innerHTML = `
    <div class="h-full overflow-auto p-4 md:p-6 bg-slate-50 space-y-6">
      <section>
        <h1 class="text-xl font-bold text-slate-800 mb-2">Estatísticas do Grafo</h1>
        <p class="text-sm text-slate-600">Resumo dos graus dos vértices (UFs), listagem de vizinhos em casos de grau máximo/mínimo e histograma de frequência.</p>
      </section>

      <div class="grid gap-4 md:grid-cols-2">
        <section class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h2 class="text-lg font-semibold text-slate-800 mb-2">Maior quantidade de vizinhos</h2>
          <p class="text-sm text-slate-600 mb-2">Grau máximo: <strong>${estatisticas.grauMaximo}</strong></p>
          <p class="text-sm text-slate-700 leading-6">${gerarListaEstadosComVizinhos(estatisticas.estadosGrauMaximo, estatisticas.vizinhosPorEstado)}</p>
        </section>

        <section class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h2 class="text-lg font-semibold text-slate-800 mb-2">Menor quantidade de vizinhos</h2>
          <p class="text-sm text-slate-600 mb-2">Grau mínimo: <strong>${estatisticas.grauMinimo}</strong></p>
          <p class="text-sm text-slate-700 leading-6">${gerarListaEstadosComVizinhos(estatisticas.estadosGrauMinimo, estatisticas.vizinhosPorEstado)}</p>
        </section>
      </div>

      <section class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <h2 class="text-lg font-semibold text-slate-800 mb-3">Histograma de frequência dos graus</h2>
        <div class="space-y-3">${barrasHistograma}</div>
      </section>
    </div>
  `
}
