export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300"
  return (
    <li>
      <img src={`${imageUrl}${movie.poster_path}`} alt='movie.title' />
      <div>{movie.title}</div>
    </li>
  )
}