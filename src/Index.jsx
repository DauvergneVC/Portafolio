// Styles
import "./Styles/abaout.css";
import "./Styles/manejo.css";

//Static images
import me from "./assets/images/me.jpg";
import gitHub from "./assets/icons/github.svg";
import linkedin from "./assets/icons/linkedin.svg";

export function Abaout() {
  return (
    <>
      <h1>
        Vicente Ignacio <br />
        Dauvergne
      </h1>
      <div className={"Me"}>
        <div className="Abaout">
          <h2>Sobre mi</h2>
          <p>
            Aqui va la descripcion o la presentacion, incluir tecnologias
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio earum
            quis possimus nesciunt omnis consequatur velit, consectetur eius
            amet dolorum beatae pariatur quam autem nihil natus sit aliquid
            officia? Quod! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ipsum nesciunt asperiores magni blanditiis nam quaerat
            delectus dolorum reprehenderit quis, consequatur ad ullam corporis
            ducimus minus repellat repudiandae! Sequi, quia error!
          </p>
        </div>
        <div className={"FotoYlinks"}>
          <img src={me} alt="me" id={"Me"}></img>
          <ul>
            <li>
              <a href={"https://www.linkedin.com/in/dauvergnevicente"}>
                <img src={linkedin} />
                Linkedin
              </a>
            </li>
            <li>
              <a href={"https://github.com/DauvergneVC"}>
                <img src={gitHub} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export function Tecnologias() {
  return (
    <>
      <h2 className="TituloManejo">Lenguajes y tecnologias que manejo</h2>
      <div className="Manejo">
        <ul className="Lenguajes">
          <li>Javascript</li>
          <li>Python</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
        <div>
          <ul className="Tecnologias">
            <li>React</li>
            <li>Django</li>
            <li>.Net</li>
          </ul>
        </div>
      </div>
    </>
  );
}
