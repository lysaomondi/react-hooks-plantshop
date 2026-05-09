import { useState } from "react";

export default function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      {/* FIX #1: add $ */}
      <p>Price: {plant.price}</p>

      {/* FIX #3: toggle stock status */}
      <button onClick={() => setInStock(!inStock)}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}
