import Heading from "../Heading";
import HotelsList from "./HotelsList";

export default function Hotels() {
  return (
    <>
      <Heading title="Our hotels" />

      <div className="hotels__info">
        <div className="hotels__info--content">
          <img src="/images/bryggen.jpg" alt="Bryggen in Bergen"></img>
          <div className="info__paragraphs">
            <h2>Book now</h2>
            <p>
              In Bergen, you can enjoy drinks by the sea or at the top of a
              mountain. You can ride Fløibanen and see the city from above. The
              restaurants and cafés are varied enough so you can find something
              for everyone in your party for lunch and dinner.
            </p>
            <p>
              If you want to book a room, send the owner's an enquiry through
              our page, and they'll get back to you with more information as
              soon as possible.
            </p>
            <p>
              The summer is the busiest time, so if you want a summer vacation
              between the seven mountains, please be quick. The rooms sell out
              fast!{" "}
            </p>
          </div>
        </div>
      </div>
      <HotelsList />
    </>
  );
}
