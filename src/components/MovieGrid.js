import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

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
        <MovieCard movie={movie} key={movie.id}></MovieCard>
      ))}
    </div>
  );
}
