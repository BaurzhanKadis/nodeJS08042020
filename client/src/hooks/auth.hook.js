import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [ token, setToken ] = useState(null);
  const [ userId, setUserId ] = useState(null);
  const [ userNickName, setUserNickName ] = useState(null);

  const login = useCallback((jwtToken, id, nickname) => {
    setToken(jwtToken)
    setUserId(id)
    setUserNickName(nickname)

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, userNickName: nickname
    }))
  },[])
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUserNickName(null)
    localStorage.removeItem(storageName)
  },[])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.userId, data.userNickName)
    }
  }, [login])

  return { login, logout, token, userId, userNickName }
}