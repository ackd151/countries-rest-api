import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          setError(res);
        }
        return res.json();
      })
      .then(
        (result) => {
          setLoading(false);
          // setError(null);
          setData(result);
        }
        // (error) => {
        //   setLoaded(true);
        //   setError(error);
        // }
      );
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
