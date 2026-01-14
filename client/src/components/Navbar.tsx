import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar flex flex-gap-20">
        <a className="active" href="/">
          <li className="logo">
            <button id="homeBtn">Chai Shy</button>
          </li>
        </a>
        <li>
          <a href="/menu">
            <button id="menuBtn">Menu</button>
          </a>
        </li>
        <li>
          <a href="/about">
            <button id="aboutBtn">About</button>
          </a>
        </li>
        <li>
          <a href="/book">
            <button id="bookBtn">Book a table</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
