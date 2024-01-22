import "./preguntas.css";

const preguntas = () => {
  return (
    <div className="contenedor-acordeon" id="qya">
      <h2>Preguntas Frecuentes</h2>

      <div className="acordeon">

        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon1"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon1">
        ¿Cómo puedo cuidar y mantener mi bolso en buen estado?
        </label>

        <div className="contenido-acordeon">
          <p>
          Prolongar la duración de tu bolso y mantenerlo en buen estado, es posible si tienes algunos cuidados a la hora de la limpieza del mismo.
Lo aconsejable es que lo limpies con una esponja o paño húmedo, si encuentras una mancha que se resiste puedes utilizar jabón blanco, o jabón líquido en pequeñas cantidades y asegurate de no dejar restos de éste en las superficies, para evitar un daño químico.
Si debes usar el lavarropas porque el interior del bolso se encuentra muy sucio, ponelo a secar en la sombra y con el interior hacia fuera, cuando la tela del forro se encuentre seca, asegúrate de secar el cuero sintético con un paño suave y sin pelusas
También debes cuidarlo de no exponerlo a fuentes de calor, ni de exponerlo demasiado tiempo al sol. Y puedes aplicarle algún producto siliconado para prolongar aún más su vida útil.

          </p>
        </div>
      </div>

      <div className="acordeon">
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon2"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon2">¿Ofrecen bolsos veganos o sin materiales de origen animal?</label>
        <div className="contenido-acordeon">
          <p>
          Los bolsos Clabelle están confeccionados de cuero sintético (de origen no animal), textiles de tapicería, y forrados con textiles mezcla de algodón y poliéster. Todos los materiales usados en la confección, son cuidadosamente seleccionados para ofrecer la mejor calidad en los productos.
          </p>
        </div>
      </div>

      <div className="acordeon">
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon3"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon3">
        ¿Qué tipos de bolsos ofrecen?
        </label>
        <div className="contenido-acordeon">
          <p>
          Clabelle busca la practicidad, versatilidad y comodidad sin renunciar a una estética cuidada y pensada para que te acompañe día a día, por eso ofrecemos mochilas que pueden ser también un bolso morral, que puedan ser adaptadas a mochilas maternales, a la mochila que llevarías a tu trabajo, a aquella en la que puedas llevar tus materiales de estudio. También contamos con otros tipos de bolsos, grandes y versátiles o pequeños y prácticos para cuando sales a bailar o de paseo.
         </p>
        </div>
      </div>

      <div className="acordeon">
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon4"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon4">
        ¿Ofrecen bolsos personalizados?
      </label>
      <div className="contenido-acordeon">
        <p>
          Si bien Clabelle, cuenta con diseños pensados en la necesidad de un segmento de cliente ya definido, también ofrece la posibilidad de diseñar bolsos personalizados acorde a necesidades específicas que desees solicitar.
        </p>
      </div>
    </div>
    </div >
  );
};

export default preguntas;
