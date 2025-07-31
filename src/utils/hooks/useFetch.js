import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ message: "Невідома помилка" }));
          throw new Error(
            errorData.message || `HTTP error: ${response.status}`
          );
        }

        const data = await response.json();
        if (data.products) setData(data.products);
        else setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
