export function passwordValidator(password) {
  if (!password) return "Informe uma senha válida !";
  if (password.length < 5) return 'Informe ao menos 5 caractéres.';
  return 'valido'
}
