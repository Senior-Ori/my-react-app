import { useState } from "react";
import InputForm from "./InputForm";

function FetchUpdate(props) {
  const [error, setError] = useState(null);
  console.log("(you want to see this only once)");
  const fetchNewName = async (enteredName) => {
    try {
      const response = await fetch(
        "https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names.json"
      );
      const data = await response.json();
      const list = [];
      for (const key in data) {
        list.push({
          id: key,
          name: data[key].name,
          amount: data[key].amount,
          lastUpdate: data[key].date,
        });
      }

      const found = list.find((names) => names.name === enteredName);

      if (list.length > 0) {
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
                  name: enteredName,
                  amount: 1,
                  date: Date(),
                  dateNow: Date.now(),
                }),
              }
            ).then((response) => {
              return response.json();
            });
        {
          props.updateLocalList({
            amount: 1,
            //id: Date.now().toString,
            name: enteredName,
            nowDate: Date.now(),
            showDate: Date(),
          });
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };
  return (
    <InputForm
      labelText={"Enter your name "}
      inputType={"text"}
      fetchNewName={fetchNewName}
    />
  );
}

export default FetchUpdate;
