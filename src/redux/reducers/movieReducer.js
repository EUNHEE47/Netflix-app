let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
  genreList: [],
  movieDetails: {},
  movieReviews: {},
  movieList: {},
  movieVideos: {},
  movieRecommendations: {},
  keyword: "",
  option: "",
  genres: "",
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
        // loading: true,
      };

    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movieDetails: payload.movieDetails,
        movieReviews: payload.movieReviews,
        movieVideos: payload.movieVideos,
        movieRecommendations: payload.movieRecommendations,
        genreList: payload.genreList,
        loading: false,
      };

    case "GET_MOVIES_LIST":
      return {
        ...state,
        movieList: payload.movieList,
        genreList: payload.genreList,
        loading: false,
      };

    case "GET_KEYWORD":
      return { ...state, keyword: payload.keyword };

    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };

    case "GET_SORT_BY_OPTION":
      return { ...state, option: payload.option };

    case "GET_MOVIES_CATEGORY":
      return { ...state, genres: payload.genres };

    default:
      return { ...state };
  }
}

export default movieReducer;
