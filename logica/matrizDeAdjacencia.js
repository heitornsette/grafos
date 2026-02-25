function gerarMatrizAdjacencia(estados, ligacoes) {
  const matriz = Array(27)
    .fill()
    .map(() => Array(27).fill(0))

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
