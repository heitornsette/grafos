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

  function display() {
    let grafico = ""
    vertices.forEach((vertice) => {
      grafico += vertice + "->" + arestas[vertice].join(", ") + "\n"
    })
    console.log(grafico)
  }

  return { criarVertice, criarLigacao, display, arestas, vertices }
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

  return { alfa, beta}
}

function exibirListaIndexada() {
  const { alfa, beta } = gerarArraysListaIndexada(estados, ligacoes)

  console.log("Lista indexada gerada:")
  console.log("Alfa:", alfa)
  console.log("Beta:", beta)
}

exibirListaIndexada()
