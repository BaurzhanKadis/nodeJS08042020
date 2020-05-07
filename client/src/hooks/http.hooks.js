import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body)
          headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, {method, body, headers})
        console.log(response, "респоны")
        const data = await response.json()

        if (response.ok) {
          console.log("Все хорошо");
        } else {
          throw new Error("Что-то пошло не так где хок");
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = () => {
    setError(null);
  };
  return { loading, request, error, clearError };
};
