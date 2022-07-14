import { useEffect, useState } from "react";
import { Grid, Skeleton } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovieList = async () => {
    try {
      setLoading(true);
      // NOTE: https://hoblist.com/api/movieList api is not working
      const response = await fetch(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      );
      const data = await response.json();
      setMovieList(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" width="100%" height={118} />;
  }

  return (
    <Grid container spacing={2}>
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieList;
