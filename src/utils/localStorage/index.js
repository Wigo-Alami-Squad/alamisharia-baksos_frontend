export const setLocalStorage = (key, v) => {
  localStorage.setItem(key, v)
}

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}
