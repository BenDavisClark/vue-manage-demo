import Cookies from 'js-cookie'

const TokenKey = 'token'
const JSESSIONID = 'JSESSIONID'
const AccountName = 'account'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getID () {
  return Cookies.get(JSESSIONID)
}

export function setID (id) {
  return Cookies.set(JSESSIONID, id)
}

export function removeID () {
  return Cookies.remove(JSESSIONID)
}

export function getAccount () {
  return Cookies.get(AccountName)
}

export function setAccount (name) {
  return Cookies.set(AccountName, name)
}

export function removeAccount () {
  return Cookies.remove(AccountName)
}
