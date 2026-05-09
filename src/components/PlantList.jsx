import PlantCard from "./PlantCard";

export default function PlantList({ plants, setPlants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          setPlants={setPlants}
        />
      ))}
    </ul>
  );
}