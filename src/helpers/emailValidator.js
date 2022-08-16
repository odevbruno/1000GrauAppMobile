export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Obrigatório informar o e-mail !"
  if (!re.test(email)) return 'Atenção, email Inválido !'
  return 'valido';
}
