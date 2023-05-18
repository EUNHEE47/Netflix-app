import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?language=en&api_key=${API_KEY}`
      );

      let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      // error 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getMovieDetails(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAILS_REQUEST" });

      const movieDetailsApi = api.get(
        `/movie/${id}?language=en-US&api_key=${API_KEY}`
      );

      const movieReviewsApi = api.get(
        `/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`
      );

      const movieVideosApi = api.get(
        `/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
      );

      const movieRecommendationsApi = api.get(
        `/movie/${id}/recommendations?language=en-US&page=1&api_key=${API_KEY}`
      );

      let [movieDetails, movieReviews, movieVideos, movieRecommendations] =
        await Promise.all([
          movieDetailsApi,
          movieReviewsApi,
          movieVideosApi,
          movieRecommendationsApi,
        ]);

      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: {
          movieDetails: movieDetails.data,
          movieReviews: movieReviews.data,
          movieVideos: movieVideos.data,
          movieRecommendations: movieRecommendations.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getMoviesList() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_LIST_REQUEST" });

      const getMovieListApi = api.get(
        `/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
      );

      let [movieList] = await Promise.all([getMovieListApi]);

      dispatch({
        type: "GET_MOVIES_LIST",
        payload: {
          movieList: movieList.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
  getMovieDetails,
  getMoviesList,
};
