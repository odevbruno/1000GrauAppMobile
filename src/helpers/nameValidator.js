export function nameValidator(name, tipo) {
  if (!name) return `Obrigatório informar o ${tipo}`
  return 'valido'
}
