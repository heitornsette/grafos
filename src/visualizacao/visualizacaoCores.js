const paletas = [
  { fundo: "#ef4444", texto: "#ffffff", nome: "Vermelho" },
  { fundo: "#3b82f6", texto: "#ffffff", nome: "Azul" },
  { fundo: "#22c55e", texto: "#ffffff", nome: "Verde" },
  { fundo: "#f59e0b", texto: "#ffffff", nome: "Amarelo" },
]

function exibirQuatroCores() {
  const { corDoEstado } = colorirGrafo(estados, ligacoes)

  const container = document.querySelector("#modalConteudo")
  container.innerHTML = `<div id="grafoContainer" class="w-full h-full"></div>`

  const nodes = new vis.DataSet(
    estados.map((estado) => {
      const paleta = paletas[corDoEstado[estado]]
      const coordenada = coordenadas[estado]

      return {
        id: estado,
        label: estado,
        color: {
          background: paleta.fundo,
          border: paleta.fundo,
          highlight: { background: paleta.fundo},
        },
        font: { color: paleta.texto, size: 18, face: "Inter, sans-serif" },
        shape: "box",
        x: coordenada.x,
        y: coordenada.y,
      }
    }),
  )

  const edges = new vis.DataSet(
    ligacoes.map(([origem, destino]) => ({
      from: origem,
      to: destino,
      color: { color: "#cbd5e1" },
    })),
  )

  const network = new vis.Network(
    document.querySelector("#grafoContainer"),
    { nodes, edges },
    {
      nodes: { shape: "box", size: 25 },
      interaction: { dragNodes: false, dragView: false, zoomView: false },
      physics: { enabled: false },
    },
  )

  requestAnimationFrame(() => network.fit({ animation: false, padding: 40 }))
  setTimeout(() => network.fit({ animation: false, padding: 40 }), 10)
}
