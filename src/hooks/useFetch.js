import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetch(url);
        console.log("DATA in useFetch: ", response);
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

    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       setLoading(false);
    //       setError(res);
    //     }
    //     return res.json();
    //   })
    //   .then(
    //     (result) => {
    //       setLoading(false);
    //       // setError(null);
    //       setData(result);
    //     }
    //     // (error) => {
    //     //   setLoaded(true);
    //     //   setError(error);
    //     // }
    //   );
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
