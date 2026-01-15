import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false); // valeur du buttton au départ

  const changeTexte = isOn === true ? "On" : "Off";

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>Changer</button>
      <p>{changeTexte}</p>
    </div>
  );
}
