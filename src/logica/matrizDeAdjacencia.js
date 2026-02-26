function gerarMatrizAdjacencia(estados, ligacoes) {
  const matriz = Array(estados.length)
    .fill()
    .map(() => Array(estados.length).fill(0))

  ligacoes.forEach(([origem, destino]) => {
    const i = estados.indexOf(origem)
    const j = estados.indexOf(destino)

    if (i !== -1 && j !== -1) {
      matriz[i][j] = 1
      matriz[j][i] = 1
    }
  })

  return matriz
}
