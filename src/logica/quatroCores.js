function criarMapaVizinhos(estados, ligacoes) {
  const vizinhos = {}

  estados.forEach((estado) => {
    vizinhos[estado] = new Set()
  })

  ligacoes.forEach(([a, b]) => {
    vizinhos[a].add(b)
    vizinhos[b].add(a)
  })

  return vizinhos
}

function ordenarPorGrauDecrescente(estados, vizinhos) {
  return [...estados].sort((a, b) => vizinhos[b].size - vizinhos[a].size)
}

function menorCorDisponivel(vizinhosDoEstado, corDoEstado) {
  const coresVizinhos = vizinhosDoEstado.filter((vizinho) => corDoEstado[vizinho] !== undefined).map((vizinho) => corDoEstado[vizinho])

  const coresOcupadas = new Set(coresVizinhos)

  let cor = 0
  while (coresOcupadas.has(cor)) cor++

  return cor
}

function colorirGrafo(estados, ligacoes) {
  const vizinhos = criarMapaVizinhos(estados, ligacoes)
  const estadosOrdenados = ordenarPorGrauDecrescente(estados, vizinhos)
  const corDoEstado = {}

  for (const estado of estadosOrdenados) {
    const vizinhosDoEstado = [...vizinhos[estado]]
    corDoEstado[estado] = menorCorDisponivel(vizinhosDoEstado, corDoEstado)
  }

  const coresUsadas = new Set(Object.values(corDoEstado)).size

  return { corDoEstado, vizinhos, coresUsadas }
}

function verificarColoracao(ligacoes, corDoEstado) {
  const conflitos = ligacoes.filter(([a, b]) => corDoEstado[a] === corDoEstado[b])
  const valida = conflitos.length === 0

  return { valida, conflitos }
}
