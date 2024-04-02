import "./Styles/NavBar.css";
//archivo para descargar
import Curriculum from "../public/download/VicenteDauvergne_curriculum.pdf";

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
        <a type={"button"} href={Curriculum} download className={"Descargar"}>
            Descargar curriculum
          </a>
      </nav>
    </header>
  );
}

export default NavBar;
