import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import movieapi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

function Home() {
  // const movieText = "Harry";
  const dispatch = useDispatch();
  const movieText = "Harry"
  const showText = "Friends"
  useEffect(() => {
    // const response = await movieapi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log("Err:", err);
    //   });
    // dispatch(addMovies(response.data))
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText))
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
