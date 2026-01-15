import React, { useEffect, useState } from "react";
import "../styles.css";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]); // création du composant MovieGrid

  useEffect(() => {
    fetch("movies.json") // récupération des données depuis le fichier movies.json
      .then((response) => response.json()) // conversion de la réponse en JSON
      .then((data) => setMovies(data)); // mise à jour de l'état avec les données récupérées
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`images/${movie.image}`} alt={movie.title} />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
