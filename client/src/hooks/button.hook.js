import { useState, useCallback, useEffect } from 'react';

export const useButton = () => {
  const [ ballActive, setBallActive ] = useState(false)
  
  const ballHandler = useCallback(() => {
    !ballActive ? setBallActive(true) : setBallActive(false);
  }, [ballActive, setBallActive])

  return {
    ballHandler, ballActive, setBallActive
  }
}