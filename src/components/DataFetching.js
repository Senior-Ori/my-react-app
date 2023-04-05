import React, { useState, useEffect } from "react";
import "./../App.css";

function DataFetching(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names.json"
    )
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
  useEffect(() => {
    props.list && setList((prevList) => prevList.concat(props.list));
  }, [props.list]);

  console.log(list, props);

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
