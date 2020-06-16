import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  userNickName: null,
  logout: noop,
  login: noop,
  menuActive: false,
  menuHandler: noop,
  setMenuActive: noop,
  isAuthenticated: false
})