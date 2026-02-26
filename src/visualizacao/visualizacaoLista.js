window.addEventListener("load", () => {
  selecionarVisualizacao("lista")
})

function renderizarGrafo() {
  const nodes = new vis.DataSet(
    estados.map(estado => {
      const regiao = regiaoEstado[estado]
      const cor = coresRegioes[regiao]
      const coordenada = coordenadas[estado]

      return {
        id: estado,
        label: estado,
        color: cor,
        x: coordenada.x,
        y: coordenada.y,
      }
    }),
  )

  const edges = new vis.DataSet(ligacoes.map(([origem, destino]) => ({from: origem, to: destino})))

  const container = document.querySelector("#modalConteudo")
  container.innerHTML = ""
  const dados = {nodes: nodes, edges: edges}

  const opcoes = {
    nodes: {
      font: {
        face: "Inter, sans-serif",
        size: 14,
        color: "#ffffff",
      },
      shape: "box",
      size: 16,
    },
    interaction: {
      dragNodes: false,
      dragView: false,
      zoomView: false,
    },
    physics: {
      enabled: false,
      stabilization: {
        iterations: 1000,
      },
    },
  }

  const network = new vis.Network(container, dados, opcoes)
}
