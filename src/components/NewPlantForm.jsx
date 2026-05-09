import { useState } from "react";

export default function NewPlantForm({ setPlants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
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
        setPlants((prev) => [...prev, data]);
      });

    // optional: reset form after submit
    setFormData({
      name: "",
      image: "",
      price: ""
    });
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        placeholder="Plant name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        placeholder="Image URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        placeholder="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">Add Plant</button>
    </form>
  );
}