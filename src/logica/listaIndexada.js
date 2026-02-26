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
    vertices.forEach(vertice => {
      grafico += vertice + "->" + arestas[vertice].join(", ") + "\n"
    })
    console.log(grafico)
  }
  return {criarVertice, criarLigacao, display}
}

const grafos = criarGrafos()

estados.forEach(estado => grafos.criarVertice(estado))

ligacoes.forEach(([a, b]) => grafos.criarLigacao(a, b))

grafos.display()
