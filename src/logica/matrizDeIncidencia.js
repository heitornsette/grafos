function gerarMatrizDeIncidencia(estados, ligacoes) {
  const matriz = Array(estados.length)
    .fill()
    .map(() => Array(ligacoes.length).fill(0))

  ligacoes.forEach(([origem, destino], k) => {
    const i = estados.indexOf(origem)
    const j = estados.indexOf(destino)

    if (i !== -1 && j !== -1) {
      matriz[i][k] = 1
      matriz[j][k] = 1
    }
  })

  return matriz
}
