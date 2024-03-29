import "./footer.css";
import igoscuro from "../../assets/icons/ig-oscuro.png";
import efectivooscuro from "../../assets/icons/efectivo-oscuro.png";
import modooscuro from "../../assets/icons/modo-oscuro.png";
import mp from "../../assets/icons/mp.png";

const footer = () => {
  return (
    <footer className="footerBox" id="contact">
      <div className="tr">
        <p> </p>
      </div>

      <article className="articleSuperior">
        <section className="sectionContacto">
          <p className="textTitulo">Contacto</p>

          <div className="boxContacto">
            <div className="formaContacto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z" />
              </svg>
              <div>
                <a className="textoB">Teléfono</a>
                <a className="textoA">+54 9 3512 56-3858</a>
              </div>
            </div>

            <div className="formaContacto">
              <img className="png" src={igoscuro} alt="" />
              <div>
                <a className="textoB">Instagram</a>
                <a className="textoA">@clabelle.mya</a>
              </div>
            </div>

            <div className="formaContacto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
              </svg>
              <div>
                <a className="textoB">Correo</a>
                <a className="textoA">clabelle.mya@gmail.com</a>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionPago">
          <p className="textTitulo">Medios de pago</p>

          <div className="boxPago">
            <div className="iconBoxPago space-x-2 lg:space-x-8 xl:space-x-16">
              <img className="png" src={efectivooscuro} alt="" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M880-740v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42ZM140-631h680v-109H140v109Zm0 129v282h680v-282H140Zm0 282v-520 520Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z" />
              </svg>

              <img className="png" src={modooscuro} alt="" />

              <img className="png" src={mp} alt="" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
            </div>

            <div>
              <a className="textoG">Garantía</a>
              <a className="textoA">2 meses por defecto de producción.</a>
              <a className="textoA">
                Servicio de remendado sin límite de tiempo.
              </a>
            </div>
          </div>
        </section>
      </article>

      <article className="articleMedio">
        <p className="marcaFooter">
          <strong className="marcaFooter">Clabelle.</strong>
        </p>
        <a className="ubicacionFooter">Córdoba, Argentina</a>
      </article>

      <article className="articleInferior">Clabele.mya 2023</article>
    </footer>
  );
};

export default footer;
