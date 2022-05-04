import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError({ status: response.status, message: response.statusText });
        } else {
          setData(await response.json());
        }
      } catch (err) {
        console.log("ERROR in useFetch");
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
