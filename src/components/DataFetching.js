import React, { useState, useEffect } from "react";
import "./../App.css";

function DataFetching(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(process.env.jojo)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        for (const key in res) {
          setList((prevState) => [
            ...prevState,
            {
              id: key,
              name: res[key].name,
              amount: res[key].amount,
              showDate: res[key].date,
              nowDate: res[key].dateNow,
            },
          ]);
        }
      })

      .catch((err) => {
        console.log(err.json());
      });
    console.log("DID FETCH!");
  }, []);

  console.log(list, props);
  const addNameHandler = (name) => {
    setList((prevList) => {
      prevList.concat(name);
    });
  };

  return (
    <ul className="no-bullets">
      {list
        .sort((b, a) => a.nowDate - b.nowDate)
        .map((data) => (
          <li key={data.nowDate}>{`/${data.showDate.slice(16, 24)}/ ${
            data.name
          } entered ${data.amount} times`}</li>
        ))}
    </ul>
  );
}
export default DataFetching;
