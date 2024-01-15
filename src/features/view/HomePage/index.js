import { useEffect } from "react";
import { getCountryListAsync } from "./HomePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import AppBar from "../../layouts/AppBar";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const HomePage = () => {
  const dispatch = useDispatch();
  const countryListState = useSelector((state) => state.homePageData);
  useEffect(() => {
    dispatch(getCountryListAsync());
  }, []);
  return (
    <Container>
      <AppBar />
      <br></br>
      {countryListState.countryLoader ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {countryListState?.countryList?.map((item) => {
            return (
              <Col xs={12} sm={6} md={4}>
                <Card style={{ width: "18rem" }}>
                  <Row>
                    <Col>
                      <Card.Img
                        variant="top"
                        src={item.flag}
                        style={{ height: 100 }}
                      />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.region}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};
export default HomePage;
