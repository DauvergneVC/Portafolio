import "./Styles/NavBar.css";

function NavBar() {
  return (
    <header className="Header">
      <nav className="NavBar">
        <ul>
          <li>
            <a className="Link" href="../index.html">
              Inicio
            </a>
          </li>
          <li>
            <a className="Link" href="../public/Projects.html">
              Proyectos
            </a>
          </li>
          <li>
            <a className="Link" href="../public/Contact.html">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
