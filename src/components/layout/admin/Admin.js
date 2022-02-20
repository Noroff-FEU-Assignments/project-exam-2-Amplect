import Heading from "../Heading";
import GetContact from "./getFromStorage/GetContact";
import GetEnquiry from "./getFromStorage/GetEnquiry";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Heading title="Admin" />
      <p>Check contact forms and hotel enquiries here:</p>
      <div className="admin__content">
        <GetContact />
        <GetEnquiry />
      </div>
      <div className="admin__button">
        <Link to={`/add`}>
          <p>Add new hotel</p>
        </Link>
      </div>
    </>
  );
}
