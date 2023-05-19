import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Carousel() {
  return (
    <div>

      <Container className="mt-5">
        <Row className="mt-5">
          <Col>
            <Card style={{ width: "18rem"}}>
              <Card.Img style={{ width: "18rem", height: "24rem"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodVtmrW9wxOPKgizpk_q8ygmjRQf_B7Y8Qg&usqp=CAU" />
              <Card.Body>
                <Card.Title>Love Again</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/240/370/395/doctor-strange-marvel-studios-4k-fantasy-wallpaper-preview.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img  variant="top" src="https://c4.wallpaperflare.com/wallpaper/764/918/481/movies-movie-poster-portrait-display-fan-art-2001-a-space-odyssey-hd-wallpaper-preview.jpg" />
              <Card.Body>
                <Card.Title>Pacific Rim movie</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>


          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{ width: "18rem", height: "24rem"}} variant="top" src="https://c4.wallpaperflare.com/wallpaper/153/940/1020/the-lord-of-the-rings-the-fellowship-of-the-ring-the-lord-of-the-rings-movies-argonath-wallpaper-preview.jpg" />
              <Card.Body>
                <Card.Title>Alien movie </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{ width: "18rem", height: "24rem"}} variant="top" src="https://c4.wallpaperflare.com/wallpaper/624/721/234/movie-poster-aliens-sigourney-weaver-h-r-giger-wallpaper-preview.jpg" />
              <Card.Body>
                <Card.Title> H. R. Giger, Aliens</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{ width: "18rem", height: "24rem"}} variant="top" src="https://c4.wallpaperflare.com/wallpaper/462/216/45/movies-dark-wednesday-addams-wednesday-tv-series-movie-poster-hd-wallpaper-preview.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>


             
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Carousel;
