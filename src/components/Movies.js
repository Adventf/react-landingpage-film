import { CardGroup, Card, Button, ButtonGroup } from "react-bootstrap";
import dont from "../images/movies/dont-look-up.jpg";
import gundala from "../images/movies/gundala.jpg";
import interstellar from "../images/movies/interstellar.jpg";
import joker from "../images/movies/joker.jpg";
import ko from "../images/movies/knives-out.jpg";
import parasite from "../images/movies/parasite.jpg";
import nysm from "../images/movies/now-you-see-me.jpg";
import tik from "../images/movies/tick2boom.jpg";

export default function Movies() {
  return (
    <div id="movies">
      <h1 className=" title text-center">Movies</h1>
      <CardGroup className="groupMovies">
        <Card className="cardMovies">
          <Card.Img variant="top" src={dont} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Don't Look Up</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={gundala} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Gundala</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={interstellar} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Interstellar</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={joker} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Joker</Card.Title>
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
          <Card.Img variant="top" src={ko} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Knives Out</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={parasite} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Parasite</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={nysm} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Now You See Me</Card.Title>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup className="buttonCard">
              <Button variant="warning">Trailer</Button>
              <Button>Watch</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
        <Card className="cardMovies">
          <Card.Img variant="top" src={tik} className="imgMovies" />
          <Card.Body>
            <Card.Title className="text-center">Tik, Tik... Boom!</Card.Title>
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
