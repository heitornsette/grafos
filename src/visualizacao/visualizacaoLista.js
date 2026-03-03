window.addEventListener("load", () => {
  selecionarVisualizacao("lista")
})

function renderizarGrafo() {
  const { alfa, beta } = gerarArraysListaIndexada(estados, ligacoes)

  const nodes = new vis.DataSet(
    estados.map((estado) => {
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

  const edges = new vis.DataSet(
    ligacoes.map(([origem, destino]) => ({ from: origem, to: destino })),
  )

  const container = document.querySelector("#modalConteudo")
  container.innerHTML = `
    <div class="h-full flex flex-col lg:flex-row lg:items-stretch">
      <div id="grafoContainer" class="flex-1 lg:flex-[1.6] min-h-[560px]"></div>
      <section class="w-full lg:w-[280px] border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-50 p-4 overflow-auto">
        <h2 class="text-lg font-semibold text-slate-800 mb-3">Lista Indexada</h2>
        <p class="text-sm text-slate-600 mb-4">Visualização dos vetores <strong>alfa</strong> (índices iniciais) e <strong>beta</strong> (adjacências).</p>

        <div class="space-y-3">
          <div>
            <h3 class="text-sm font-semibold text-slate-700 mb-1">Alfa</h3>
            <code class="block bg-white border border-slate-200 rounded p-2 text-xs break-words text-slate-800">[${alfa.join(", ")}]</code>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-slate-700 mb-1">Beta</h3>
            <code class="block bg-white border border-slate-200 rounded p-2 text-xs break-words text-slate-800">[${beta.join(", ")}]</code>
          </div>
        </div>
      </section>
    </div>
  `

  const grafoContainer = document.querySelector("#grafoContainer")
  const dados = { nodes: nodes, edges: edges }

  const opcoes = {
    nodes: {
      font: {
        face: "Inter, sans-serif",
        size: 18,
        color: "#ffffff",
      },
      shape: "box",
      size: 25,
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

  const network = new vis.Network(grafoContainer, dados, opcoes)

  function ajustarEnquadramento() {
    network.fit({
      animation: false,
      padding: 40,
    })
  }

  requestAnimationFrame(ajustarEnquadramento)
  setTimeout(ajustarEnquadramento, 10)
}
