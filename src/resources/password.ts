const pass_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export function isValidPassword(pass: string): boolean {
  if (!pass || pass === "") {
    return false;
  }

  const match = pass_regex.test(pass);
  return match;
}
