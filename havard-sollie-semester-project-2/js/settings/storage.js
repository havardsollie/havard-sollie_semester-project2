export const tokenKey = "token";
export const userKey = "user";

export function saveTokenKey (token) {
  saveToLocalStorage(tokenKey, token);
}

export function fetchToken() {
  return getFromLocalStorage(tokenKey);
}

export function saveThisUser(user) {
  saveToLocalStorage(userKey, user);
}

export function getUsername() {
  const user = getFromLocalStorage(userKey);

  if(user) {
    return user.username;
  }
  return null;
}

function saveToLocalStorage (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);

  if(!value) {
    return [];
  }
  return JSON.parse(value);
}