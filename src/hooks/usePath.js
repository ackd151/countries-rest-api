import { useEffect, useState } from "react";

export const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);

  const onPopstate = () => {
    const locPath = window.location.pathname;
    setPath(locPath);
  };

  useEffect(() => {
    window.addEventListener("popstate", onPopstate);
    return () => {
      window.removeEventListener("popstate", onPopstate);
    };
  }, []);

  return path;
};
