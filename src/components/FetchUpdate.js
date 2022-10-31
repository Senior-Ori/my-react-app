import { useState, useEffect } from "react";

function FetchUpdate(props) {
  const [list, setList] = useState([]);
  const loadedNames = [];

  useEffect(() => {
    fetch(
      "https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("fetched:", data);
        setList(data);
        console.log(props.enteredName);
      });
  }, [props.enteredName]);

  if (list[0] !== undefined) {
    for (const key in list) {
      loadedNames.push({
        id: key,
        name: list[key].name,
        amount: list[key].amount,
        lastUpdate: list[key].date,
      });
    }
  }
  const found = loadedNames.find((names) => names.name === props.enteredName);

  useEffect(() => {
    if (list[0] !== undefined) {
      found
        ? fetch(
            `https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names/${found.id}.json`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: found.name,
                amount: found.amount + 1,
                date: Date(),
                dateNow: Date.now(),
              }),
            }
          )
        : fetch(
            "https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names.json",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: props.enteredName,
                amount: 1,
                date: Date(),
                dateNow: Date.now(),
              }),
            }
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log("fetched3:", data);
              //setList(data);
              console.log(props.enteredName);
            });
      console.log(found && found.id);
      console.log("flag has been Submited");
      return props.flagSubmit(false);
    }
  }, [found, list, props]);
}

export default FetchUpdate;
