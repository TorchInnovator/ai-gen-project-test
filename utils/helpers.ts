// 工具函數
export function getLocalStorageItem(key: string): string | null {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setLocalStorageItem(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
