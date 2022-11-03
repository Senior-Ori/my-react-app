import { useState, useEffect } from "react";

function FetchUpdate(props) {
  const [list, setList] = useState([]);
  console.log("(you want to see this only once)");
  async function fetchList() {
    await fetch(
      "https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("fetched:", data);
        for (const key in data) {
          setList((prevState) => [
            ...prevState,
            {
              id: key,
              name: data[key].name,
              amount: data[key].amount,
              lastUpdate: data[key].date,
            },
          ]);
        }
      });
  }

  fetchList();
  const found = list.find((names) => names.name === props.enteredName);

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
          ).then((response) => {
            return response.json();
          });

      return props.flagSubmit(false);
    }
  }, [found, list, props]);
}

export default FetchUpdate;
