import React from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage({ plants, setPlants, search, setSearch }) {
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;