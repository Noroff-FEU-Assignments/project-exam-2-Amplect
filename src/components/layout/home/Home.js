import Heading from "../Heading";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container__home">
        <div className="image__home--background">
          <div className="container__home--logo">
            <img src="/images/logo.png" alt="Holidaze logo"></img>
            <p>
              Bergen is the city between the seven mountains, suitable for a
              relaxed get-away for two, or an active vacation with your family.
            </p>
            <Link className="button__home--book" to="/hotels">
              Book now
            </Link>
          </div>
        </div>

        <div className="container__home--welcome">
          <Heading title="Welcome to Holidaze" />
          <div className="image__home--icon">
            <img src="/images/icon.png" alt="Holidaze logo icon" />
          </div>
          <p>
            Where you can find the perfect accommodation alternative for{" "}
            <i>your</i> needs.
          </p>
        </div>

        <div className="container__home--pictures">
          <h2>Pictures from visitors:</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/family-trip.jpg"
                alt="Family by a campfire"
              />
              <Carousel.Caption>
                <h3>Family trip on the countryside, from Line O.</h3>
                <p>
                  "We had such a fun time with our family in Bergen, and
                  Holidaze was wonderful and easy to use!"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/bergen_visitor.jpg"
                alt="Bryggen in Bergen"
              />

              <Carousel.Caption>
                <h3>Bryggen in Bergen, from Stein V.</h3>
                <p>
                  "We had an amazing weekend in Bergen, thanks to Holidaze."
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/floibanen.jpg"
                alt="Fløibanen in Bergen"
              />

              <Carousel.Caption>
                <h3>Fløibanen, from Oskar K.</h3>
                <p>
                  "Holidaze helped us finally get out and experience the lovely
                  city of Bergen! Thanks for the easy booking."
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
