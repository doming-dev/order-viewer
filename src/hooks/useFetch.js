// Based on https://scotch.io/tutorials/create-a-custom-usefetch-react-hook#toc-useeffect-s-return-error
import { useState, useEffect } from "react";

export default function useFetch(url, options, dependencies, callback, disabled) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching...", url, options);
      setIsLoading(true);
      setResponse(null);
      setError(null);
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then(responseJson => {
          setResponse(responseJson);
          setIsLoading(false);
          if (callback) {
            callback(responseJson);
          }
        })
        .catch(err => {
          err.text().then(text => {
            const result = { status: err.status, message: text ? text : err.statusText }
            console.log(`ERROR on ${url}`, err, result);
            setError(result);
            setIsLoading(false);
          });
        });
    };
    if (url && !disabled) {
      // If no url, there's nothing to fetch
      fetchData();
    }
  }, dependencies);
  return { response, error, isLoading };
}
