import { CardGroup, Card, Button, ButtonGroup } from "react-bootstrap";
import aib from "../images/series/alice-in-bonderland.jpg";
import aot from "../images/series/aot.jpg";
import bb from "../images/series/breaking-bad.jpg";
import dark from "../images/series/dark.jpg";
import got from "../images//series/game-of-thrones.jpg";
import mh from "../images/series/money-heist.jpg";
import narcos from "../images/series/narcos-s3.jpg";
import sherlock from "../images/series/sherlock.jpg";

export default function Series() {
  return (
    <div id="series">
      <h1 className="title text-center">TV Series</h1>
      <CardGroup className="groupMovies">
        <Card className="cardMovies">
          <Card.Img variant="top" src={aib} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Alice In Bonderland</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={aot} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Atack On Titan</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={bb} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Breaking Bad</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={dark} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Dark</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="cardMovies">
          <Card.Img variant="top" src={got} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Game of Thrones</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={mh} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Money Heist</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={narcos} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Narcos</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={sherlock} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Sherlock</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
