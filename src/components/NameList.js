import React, { useEffect, useState } from "react";

export default function NameList() {
  const [names, setNames] = useState(["Alice", "Bobo"]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    setNames([...names, newName]);
    setNewName("");
  };

  const deleteName = () => {
    setNames(names.slice(0, -1));
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Entrer un nom"
      />

      <button onClick={addName}>Ajouter</button>

      <button onClick={deleteName}>Supprimer</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
