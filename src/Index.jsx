import "./Styles/abaout.css";
import "./Styles/manejo.css";

export function Abaout() {
  return (
    <>
      <h1>
        Vicente Ignacio <br />
        Dauvergne
      </h1>
      <div className="Me">
        <div className="Abaout">
          <h2>Sobre mi</h2>
          <p>
            Aqui va la descripcion o la presentacion, incluir tecnologias
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio earum
            quis possimus nesciunt omnis consequatur velit, consectetur eius
            amet dolorum beatae pariatur quam autem nihil natus sit aliquid
            officia? Quod!
          </p>
        </div>
        <img src="../public/images/me_3.jpg" alt="me"></img>
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
