import { MovieCard } from './MovieCard';
import styles from '../styles/MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { httpGet } from '../utils/httpClient';

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    httpGet("/discover/movie").then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) =>
        <MovieCard key={movie.id} movie={movie} />
      )}
    </ul>
  )
} 