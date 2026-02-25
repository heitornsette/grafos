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
