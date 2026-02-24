function criarGrafos() {
  const arestas = {}
  const vertices = []
  function criarVertices(vertice) {
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
  return {criarVertices, criarLigacao, display}
}

const grafos = criarGrafos()

// prettier-ignore
const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
]

// prettier-ignore
const ligacoes = [
  ["AC", "AM"], ["AC", "RO"],
  ["AM", "RR"], ["AM", "RO"], ["AM", "MT"], ["AM", "PA"],
  ["RR", "PA"],
  ["RO", "MT"],
  ["PA", "AP"], ["PA", "MA"], ["PA", "TO"], ["PA", "MT"],
  ["TO", "MA"], ["TO", "PI"], ["TO", "BA"], ["TO", "GO"], ["TO", "MT"],

  ["MA", "PI"],
  ["PI", "CE"], ["PI", "PE"], ["PI", "BA"],
  ["CE", "RN"], ["CE", "PB"], ["CE", "PE"],
  ["RN", "PB"],
  ["PB", "PE"],
  ["PE", "AL"], ["PE", "BA"],
  ["AL", "SE"], ["AL", "BA"],
  ["SE", "BA"],

  ["MT", "MS"], ["MT", "GO"],
  ["MS", "GO"], ["MS", "MG"], ["MS", "SP"], ["MS", "PR"],
  ["GO", "DF"], ["GO", "MG"], ["GO", "BA"],

  ["MG", "BA"], ["MG", "ES"], ["MG", "RJ"], ["MG", "SP"],
  ["ES", "BA"], ["ES", "RJ"],
  ["RJ", "SP"],

  ["SP", "PR"],
  ["PR", "SC"],
  ["SC", "RS"]
]

estados.forEach(estado => grafos.criarVertices(estado))

ligacoes.forEach(([a, b]) => grafos.criarLigacao(a, b))

grafos.display()
