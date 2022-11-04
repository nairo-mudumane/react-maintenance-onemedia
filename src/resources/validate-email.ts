const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isValidEmail(email?: string): boolean {
  if (email === "") {
    return false;
  }

  const match = String(email).toLowerCase().match(regex);
  if (match && match.length > 0) {
    return true;
  }

  return false;
}
