export function setLocalItem(key: string, value: string): void {
  return window.localStorage.setItem(key, value);
}

export function getLocalItem<T>(key: string): T | null {
  const str = window.localStorage.getItem(key);

  if (!str) {
    return null;
  }

  const value = JSON.parse(str);
  return value as T;
}

export function removeLocalItem(key: string): void {
  return window.localStorage.removeItem(key);
}
