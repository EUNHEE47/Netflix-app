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
      dispatch({ type: "GET_MOVIES_REQUEST" });

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

      const genreApi = api.get(
        `/genre/movie/list?language=en&api_key=${API_KEY}`
      );

      let [
        movieDetails,
        movieReviews,
        movieVideos,
        movieRecommendations,
        genreList,
      ] = await Promise.all([
        movieDetailsApi,
        movieReviewsApi,
        movieVideosApi,
        movieRecommendationsApi,
        genreApi,
      ]);

      console.log(movieDetails);

      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: {
          movieDetails: movieDetails.data,
          movieReviews: movieReviews.data,
          movieVideos: movieVideos.data,
          movieRecommendations: movieRecommendations.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getMoviesList(page, keyword, option, category) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      let getMovieListApi;

      // console.log("keyword?", keyword);
      // console.log("option?", option);
      // console.log("category?", category);

      if (keyword !== "") {
        getMovieListApi = api.get(
          `/search/movie?query=${keyword}&language=en-US&page=${page}&api_key=${API_KEY}`
        );
      } else if (option !== "") {
        getMovieListApi = api.get(
          `/discover/movie?page=1&language=en&include_adult=false&include_video=false&sort_by=${option}&api_key=${API_KEY}`
        );
      } else if (category !== "") {
        getMovieListApi = api.get(
          `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${category}&api_key=${API_KEY}`
        );
      } else {
        getMovieListApi = api.get(
          `/movie/now_playing?language=en-US&page=${page}&api_key=${API_KEY}`
        );
      }

      const genreApi = api.get(
        `/genre/movie/list?language=en&api_key=${API_KEY}`
      );

      let [movieList, genreList] = await Promise.all([
        getMovieListApi,
        genreApi,
      ]);

      // console.log("getMovieListApi?", movieList.data);

      dispatch({
        type: "GET_MOVIES_LIST",
        payload: {
          movieList: movieList.data,
          genreList: genreList.data.genres,
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
