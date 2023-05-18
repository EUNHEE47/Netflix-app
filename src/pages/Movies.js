import { Col, Container, Row } from "react-bootstrap";
import MoviesList from "../components/MoviesList";

const Movies = () => {
  return (
    <Container className="movies-wrap">
      <Row>
        <Col lg={5}>정렬</Col>
        <Col className="movies-list-wrap" lg={7}>
          <MoviesList />
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
