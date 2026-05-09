import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      price,
      inStock: true,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlants([...plants, data]);
      });

    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;