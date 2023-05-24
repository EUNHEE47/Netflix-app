/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import { useSelector } from "react-redux";
import { Badge, Col, Container, Modal, Row } from "react-bootstrap";
import YouTube from "react-youtube";
import { IoCloseSharp } from "react-icons/io5";
import RelatedMovies from "../components/RelatedMovies";
import { ClipLoader } from "react-spinners";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    movieDetails,
    movieReviews,
    movieVideos,
    movieRecommendations,
    loading,
  } = useSelector((state) => state.movie);
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState(true);
  const [related, setRelated] = useState(false);

  // console.log("movieDetails ?", movieDetails);
  // console.log("movieReviews ?", movieReviews);
  // console.log("movieVideos?", movieVideos);
  // console.log("movieRecommendations?", movieRecommendations);

  const opts = {
    height: "560",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const activeReviewsBtn = () => {
    setReviews(true);
    setRelated(false);
  };

  const activeRelatedBtn = () => {
    setRelated(true);
    setReviews(false);
  };

  useEffect(() => {
    dispatch(movieAction.getMovieDetails(id));

    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <ClipLoader
        color="red"
        loading={loading}
        size={150}
        className="loading"
      />
    );
  }

  return (
    <Container className="detail-page">
      <Row className="movie-detail">
        <Col className="detail-poster" lg={6} md={6} sm={12}>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
          />
        </Col>
        <Col className="detail-info" lg={6} md={6} sm={12}>
          <div>
            {movieDetails.genres &&
              movieDetails.genres.map((item, index) => (
                <Badge bg="danger" key={index} className="detail-badge">
                  {item.name}
                </Badge>
              ))}
          </div>

          <h1>{movieDetails.title}</h1>

          <div className="detail-social">
            <span>⭐{movieDetails.vote_average}</span>
            <span>👥{movieDetails.popularity}</span>
            {movieDetails.adult ? <span>18+</span> : <span>Under 18</span>}
          </div>
          <div className="detail-overview">{movieDetails.overview}</div>

          <ul className="detail-info-list">
            <li>
              <span>Revenue</span>${movieDetails.revenue}
            </li>
            <li>
              <span>Budget</span>${movieDetails.budget}
            </li>
            <li>
              <span>Release Day</span>
              {movieDetails.release_date}
            </li>
            <li>
              <span>Time</span>
              {movieDetails.runtime}
            </li>
          </ul>

          <button className="modal-btn" onClick={() => setModalShow(true)}>
            Watch Trailer
          </button>

          <Modal show={modalShow} onHide={() => setModalShow(false)} size="xl">
            <Modal.Header>
              <IoCloseSharp
                onClick={() => setModalShow(false)}
                className="close-btn"
              />
            </Modal.Header>
            <Modal.Body>
              {movieVideos.results?.length === 0 ? (
                <h1 className="modal-body-text">No Trailer</h1>
              ) : (
                <YouTube videoId={movieVideos.results?.[0].key} opts={opts} />
              )}
            </Modal.Body>
          </Modal>
        </Col>
      </Row>

      <div className="detail-inner-btns">
        <button
          className={reviews ? "reviews-btn btn-active" : "reviews-btn"}
          onClick={activeReviewsBtn}
        >
          REVIEWS({movieReviews.results && movieReviews.results.length})
        </button>
        <button
          className={related ? "related-btn : btn-active" : "related-btn"}
          onClick={activeRelatedBtn}
        >
          RELATED MOVIES(
          {movieRecommendations.results && movieRecommendations.results.length})
        </button>
      </div>
      <div className={reviews ? "review-content" : "hide"}>
        {movieReviews.results &&
          movieReviews.results.map((item, index) => (
            <div className="comment" key={index}>
              <h5>{item.author}</h5>
              <p>{item.content}</p>
            </div>
          ))}
      </div>
      <Row className={related ? "related-content" : "hide"}>
        {movieRecommendations.results &&
          movieRecommendations.results.map((recs, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <RelatedMovies recs={recs} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MovieDetail;
