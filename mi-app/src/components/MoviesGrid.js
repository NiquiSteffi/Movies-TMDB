import movies from '../movies.json';
import { MovieCard } from './MovieCard';

export function MoviesGrid() {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} />
        )
      })}
    </ul>
  )
}