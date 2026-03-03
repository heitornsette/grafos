function calcularGraus(estados, ligacoes) {
  const graus = {}

  estados.forEach((estado) => {
    graus[estado] = 0
  })

  ligacoes.forEach(([origem, destino]) => {
    graus[origem]++
    graus[destino]++
  })

  return graus
}

function calcularFrequenciaGraus(graus) {
  const frequencia = {}

  Object.values(graus).forEach((grau) => {
    frequencia[grau] = (frequencia[grau] || 0) + 1
  })

  return frequencia
}

function criarMapaDeVizinhos(estados, ligacoes) {
  const vizinhosPorEstado = {}

  estados.forEach((estado) => {
    vizinhosPorEstado[estado] = []
  })

  ligacoes.forEach(([origem, destino]) => {
    vizinhosPorEstado[origem].push(destino)
    vizinhosPorEstado[destino].push(origem)
  })

  return vizinhosPorEstado
}

function calcularEstatisticasGraus(estados, ligacoes) {
  const graus = calcularGraus(estados, ligacoes)
  const frequenciaGraus = calcularFrequenciaGraus(graus)
  const vizinhosPorEstado = criarMapaDeVizinhos(estados, ligacoes)

  const valoresGraus = Object.values(graus)
  const grauMaximo = Math.max(...valoresGraus)
  const grauMinimo = Math.min(...valoresGraus)

  const estadosGrauMaximo = estados.filter(
    (estado) => graus[estado] === grauMaximo,
  )
  const estadosGrauMinimo = estados.filter(
    (estado) => graus[estado] === grauMinimo,
  )

  return {
    graus,
    frequenciaGraus,
    vizinhosPorEstado,
    grauMaximo,
    grauMinimo,
    estadosGrauMaximo,
    estadosGrauMinimo,
  }
}
