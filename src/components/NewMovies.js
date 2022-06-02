import { Carousel } from "react-bootstrap";
import dr from "../images/new-movies/dr-strange.jpg";
import bj from "../images/new-movies/ben-jody-new.jpg";
import fb from "../images/new-movies/fantastic-beasts.jpg";
import rn from "../images/new-movies/red-notice-new.jpg";

export default function NewMovies() {
  return (
    <div>
      <Carousel fade className="beranda">
        <Carousel.Item className="imgBeranda">
          <img className="d-block w-100" src={dr} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item className="imgBeranda">
          <img className="d-block w-100" src={bj} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item className="imgBeranda">
          <img className="d-block w-100" src={fb} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item className="imgBeranda">
          <img className="d-block w-100" src={rn} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
