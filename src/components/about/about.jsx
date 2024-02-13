import "./about.css";
import Claudia2 from "../../assets/img/Claudia2.jpg";

const about = () => {
  return (
    <div className="boxAbout" id="about">
      <section className="sectionImg">
        <img className="imgAbout" src={Claudia2} alt="" />
      </section>

      <section className="sectionText">
        <h3>Sobre el proyecto</h3>
        <p>
          Clabelle es un emprendimiento personal que surge de mis experiencias como una mujer, que no solo es mamá si no que tambien trabaja, estudia , crea y sueña. Con nuestros productos buscamos acompañarte dia a día y brindarte una opción linda, fresca y accesible para que puedas renovar tus mochilas y accesorios.
        </p>
        <div>
          <div>
          <img className="png" src="./src/assets/icons/ig-blanco.png" alt="" />
          </div>
          <h2>@Clabelle.mya</h2>
        </div>
      </section>
    </div>
  );
};

export default about;
