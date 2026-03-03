// prettier-ignore
const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
]

// prettier-ignore
const ligacoes = [
  ["AC", "AM"], ["AC", "RO"], ["AM", "RR"], ["AM", "RO"], ["AM", "MT"], ["AM", "PA"],
  ["RR", "PA"], ["RO", "MT"], ["PA", "AP"], ["PA", "MA"], ["PA", "TO"], ["PA", "MT"],
  ["MA", "PI"], ["MA", "TO"], ["PI", "CE"], ["PI", "PE"], ["PI", "BA"], ["PI", "TO"],
  ["CE", "RN"], ["CE", "PB"], ["CE", "PE"], ["RN", "PB"], ["PB", "PE"], ["PE", "AL"], 
  ["PE", "BA"], ["AL", "SE"], ["AL", "BA"], ["SE", "BA"], ["BA", "ES"], ["BA", "MG"], 
  ["BA", "GO"], ["BA", "TO"], ["MT", "MS"], ["MT", "GO"], ["MT", "TO"], ["MS", "GO"], 
  ["MS", "MG"], ["MS", "SP"], ["MS", "PR"], ["GO", "DF"], ["GO", "MG"], ["DF", "MG"],
  ["MG", "ES"], ["MG", "RJ"], ["MG", "SP"], ["ES", "RJ"], ["RJ", "SP"], ["SP", "PR"],
  ["PR", "SC"], ["SC", "RS"]
]

// prettier-ignore
const coresRegioes = {
  "Norte": "#10b981",
  "Nordeste": "#3b82f6",
  "Centro-Oeste": "#ffce1b",
  "Sudeste": "#f59e0b",
  "Sul": "#ef4444",
}

// prettier-ignore
const regiaoEstado = {
  "AC": "Norte", "AM": "Norte", "AP": "Norte", "PA": "Norte", "RO": "Norte", "RR": "Norte", "TO": "Norte",
  "AL": "Nordeste", "BA": "Nordeste", "CE": "Nordeste", "MA": "Nordeste", "PB": "Nordeste", "PE": "Nordeste", "PI": "Nordeste", "RN": "Nordeste", "SE": "Nordeste",
  "DF": "Centro-Oeste", "GO": "Centro-Oeste", "MT": "Centro-Oeste", "MS": "Centro-Oeste",
  "ES": "Sudeste", "MG": "Sudeste", "RJ": "Sudeste", "SP": "Sudeste",
  "PR": "Sul", "RS": "Sul", "SC": "Sul"
}

// prettier-ignore
const coordenadas = {
  "AC": { x: -380, y: -20 },  "AM": { x: -250, y: -80 },
  "RR": { x: -200, y: -220 }, "PA": { x: -20, y: -100 },
  "AP": { x: 50, y: -230 },   "RO": { x: -220, y: 50 },
  "TO": { x: 50, y: 30 },

  "MA": { x: 140, y: -120 },   "PI": { x: 200, y: -40 },
  "CE": { x: 280, y: -100 },  "RN": { x: 360, y: -70 },
  "PB": { x: 380, y: -30 },   "PE": { x: 350, y: 10 },
  "AL": { x: 360, y: 50 },    "SE": { x: 330, y: 80 },
  "BA": { x: 200, y: 80 },

  "MT": { x: -80, y: 80 },    "MS": { x: -100, y: 220 },
  "GO": { x: 50, y: 140 },    "DF": { x: 90, y: 130 },

  "MG": { x: 160, y: 190 },   "ES": { x: 280, y: 190 },
  "RJ": { x: 240, y: 260 },   "SP": { x: 100, y: 300 },

  "PR": { x: 20, y: 360 },    "SC": { x: 40, y: 410 },
  "RS": { x: 10, y: 480 }
}
