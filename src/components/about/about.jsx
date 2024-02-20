import "./about.css";
import Claudia2 from "../../assets/img/Claudia2.jpg";

const about = () => {
  return (
    <div className="py-12 md:py-24" id="about">
      <div className="container flex lg:flex-row flex-col space-x-0 lg:space-x-16 px-0 items-center lg:items-start">
        <section className="sectionImg">
          <img className="imgAbout" src={Claudia2} alt="" />
        </section>

        <section className="sectionText p-4 sm:p-0 m-4">
          <h3>Sobre el proyecto</h3>
          <p>
            Clabelle es un emprendimiento personal que surge de mis experiencias
            como una mujer, que no solo es mamá si no que tambien trabaja,
            estudia , crea y sueña. Con nuestros productos buscamos acompañarte
            dia a día y brindarte una opción linda, fresca y accesible para que
            puedas renovar tus mochilas y accesorios.
          </p>
          <div className="flex items-center my-12">
            <div>
              <img
                className="png"
                src="./src/assets/icons/ig-blanco.png"
                alt=""
              />
            </div>
            <h2>@Clabelle.mya</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default about;
