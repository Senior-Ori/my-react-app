import React, { useState, useEffect } from "react";

function DataFetching(params) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch(
      "https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setNames(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.json());
      });
  }, []);
  return (
    <div>
      <ul>
        {names.map((names, index) => (
          <li
            key={names.name}
          >{`[${index}] ${names.name} entered ${names.amount} times`}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetching;
