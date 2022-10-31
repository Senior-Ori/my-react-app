import React, { useState, useEffect } from "react";
import "./../App.css";

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
        console.log(Object.values(res));
      })
      .catch((err) => {
        console.log(err.json());
      });
    console.log("DID FETCH!");
    //forceUpdate();
  }, []);

  const loadedNames = [];
  for (const key in names) {
    loadedNames.push({
      id: key,
      name: names[key].name,
      amount: names[key].amount,
      showDate: names[key].date,
      nowDate: names[key].dateNow,
    });
  }
  console.log(loadedNames);

  return (
    <div>
      <ul className="no-bullets">
        {loadedNames
          .sort((b, a) => a.nowDate - b.nowDate)
          .map((data) => (
            <li key={data.nowDate}>{`/${data.showDate.slice(16, 24)}/ ${
              data.name
            } entered ${data.amount} times`}</li>
          ))}
      </ul>
    </div>
  );
}
export default DataFetching;
