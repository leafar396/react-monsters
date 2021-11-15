import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList.jsx";
import SearchField from "./components/searchField/searchField.jsx";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const changeHandler = (event) => {
    setSearchField(event.target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters</h1>
      <SearchField placeholder="Search" changeHandler={changeHandler} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
