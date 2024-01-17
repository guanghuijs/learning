export function setLocalStore<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStore<T>(key: string): T {
  return JSON.parse(localStorage.getItem(key) || '{}');
}
