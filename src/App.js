import { useState } from "react";
import Person from "./Person";
import "./styles.css";

const App = () => {
  const [person, setPerson] = useState({
    f_name: "John",
    l_name: "Cena"
  });

  const [personAge, setAge] = useState("33");

  const updatePersonState = () => {
    setPerson({
      f_name: "ohn",
      l_name: "ena"
    });

    setAge("43");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Person fname={person.f_name} lname={person.l_name}></Person>
      <div>Age: {personAge}</div>
      <button onClick={updatePersonState}>Update Person</button>
    </div>
  );
};

export default App;
