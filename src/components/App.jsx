import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "",
  });

  // FETCH plants on load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // ADD plant
 function handleSubmit(e) {
  e.preventDefault();

  const plantToAdd = {
    name: newPlant.name,
    image: newPlant.image,
    price: newPlant.price.toString(),
  };

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantToAdd),
  })
    .then((res) => res.json())
    .then((addedPlant) => {
      setPlants([...plants, addedPlant]);
    });

  setNewPlant({
    name: "",
    image: "",
    price: "",
  });
}
  // TOGGLE SOLD OUT
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, soldOut: !plant.soldOut }
        : plant
    );

    setPlants(updatedPlants);
  }

  // SEARCH FILTER
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>
          Plantsy <span className="logo" role="img">🌱</span>
        </h1>
      </header>

      <main>
        {/* FORM */}
        <div className="new-plant-form">
          <h2>New Plant</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Plant name"
              value={newPlant.name}
              onChange={(e) =>
                setNewPlant({ ...newPlant, name: e.target.value })
              }
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newPlant.image}
              onChange={(e) =>
                setNewPlant({ ...newPlant, image: e.target.value })
              }
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              step="0.01"
              value={newPlant.price}
              onChange={(e) =>
                setNewPlant({ ...newPlant, price: e.target.value })
              }
            />

            <button type="submit">Add Plant</button>
          </form>
        </div>

        {/* SEARCH */}
        <div className="searchbar">
          <label htmlFor="search">Search Plants:</label>

          <input
            id="search"
            type="text"
            placeholder="Type a name to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* PLANTS LIST */}
        <ul className="cards">
          {filteredPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onToggleStock={handleSoldOut}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;