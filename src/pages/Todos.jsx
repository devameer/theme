import axios from "axios";
import React, { useEffect, useState } from "react";
// import { callAPI } from '../utils/callApi';
import useApi from "../hooks/useApi";
const Todos = () => {
  // const { data, error, loading } = useApi(
  //   "https://jsonplaceholder.typicode.com/todos",
  //   "get"
  // );
  const { data, error, loading, post } = useApi(
    "https://jsonplaceholder.typicode.com/todos",
    "get"
  );
  return (
    <div>
      {/* {error}
      {loading
        ? "loading..."
        : data?.map((item, index) => (
            <div key={item.id}>
              {index + 1} title: {item.title}
            </div>
          ))} */}

      <button onClick={() => post({ name: 'ameer' })}>Submit</button>
    </div>
  );
};

export default Todos;
