import React, { useEffect } from "react";
import axios from "axios";
const useApi = (url) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const get = () => {
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, [url]);
  };
  const post = (dataSet) => {
    axios
      .post(url, dataSet)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return {
    data,
    error,
    loading,
    get,
    post,
  };
};

export default useApi;
