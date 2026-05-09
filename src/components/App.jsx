import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

export default function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // ✅ filter logic
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />

      {/* ✅ REQUIRED BY TEST */}
      <div className="searchbar">
        <input
          placeholder="Type a name to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <PlantList plants={displayedPlants} setPlants={setPlants} />
    </main>
  );
}