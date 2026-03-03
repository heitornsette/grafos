function criarGrafos() {
  const arestas = {}
  const vertices = []

  function criarVertice(vertice) {
    vertices.push(vertice)
    arestas[vertice] = []
  }

  function criarLigacao(vertice1, vertice2) {
    arestas[vertice1].push(vertice2)
    arestas[vertice2].push(vertice1)
  }

  return { criarVertice, criarLigacao, arestas, vertices }
}

function gerarArraysListaIndexada(estados, ligacoes) {
  const grafo = criarGrafos()

  estados.forEach((estado) => grafo.criarVertice(estado))
  ligacoes.forEach(([a, b]) => grafo.criarLigacao(a, b))

  const alfa = []
  const beta = []

  grafo.vertices.forEach((vertice) => {
    alfa.push(beta.length)

    grafo.arestas[vertice].forEach((vizinho) => {
      beta.push(vizinho)
    })
  })

  alfa.push(beta.length)

  return { alfa, beta }
}
