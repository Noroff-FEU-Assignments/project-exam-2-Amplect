import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container__footer">
      <div className="container__footer--links">
        <Link to="/hotels">Browse our hotels</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="#">FAQ</Link>
      </div>
      <div className="container__footer--icon">
        <img src="/images/icon-w.png" alt="Holidaze icon"></img>
      </div>
      <div className="container__footer--links">
        <img
          className="footer__icons"
          src="/images/facebook-square-brands.svg"
          alt="Facebook"
          width="30px"
        ></img>
        <img
          className="footer__icons"
          src="/images/instagram-brands.svg"
          alt="Instagram"
          width="30px"
        ></img>
        <img
          className="footer__icons"
          src="/images/twitter-square-brands.svg"
          alt="Twitter"
          width="30px"
        ></img>
      </div>
    </div>
  );
}
