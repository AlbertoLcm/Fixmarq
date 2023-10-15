import { routes } from "../../helpers/routes";
import imageFinishes from "../../assets/images/finishes.png";
import { Link } from "react-router-dom";
import "./Services.css";
import { Fragment } from "react";

function Services() {
  return (
    <Fragment>
      <section className="section-services" id="services">
        <div className="container-title">
          <p className="subtitle">Te ofrecemos</p>
          <h2>Nuestros Servicios</h2>
        </div>

        <div className="section-services__content-cards">
          <Link
            to={routes.finishes}
            className="section-services__content-cards__card card-interiores"
          >
            <h3>Acabados de interiores y exteriores</h3>
            <Link to={routes.finishes}>
              Ver más
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2125 4.96241C16.3883 4.78684 16.6266 4.68823 16.875 4.68823C17.1234 4.68823 17.3617 4.78684 17.5375 4.96241L26.9125 14.3374C27.0881 14.5132 27.1867 14.7515 27.1867 14.9999C27.1867 15.2483 27.0881 15.4866 26.9125 15.6624L17.5375 25.0374C17.4517 25.1295 17.3482 25.2034 17.2332 25.2546C17.1182 25.3059 16.994 25.3334 16.8682 25.3356C16.7423 25.3379 16.6172 25.3147 16.5005 25.2676C16.3838 25.2204 16.2777 25.1502 16.1887 25.0612C16.0997 24.9722 16.0295 24.8661 15.9823 24.7494C15.9352 24.6327 15.912 24.5076 15.9143 24.3818C15.9165 24.2559 15.944 24.1317 15.9953 24.0167C16.0465 23.9017 16.1204 23.7982 16.2125 23.7124L23.9875 15.9374H3.75C3.50136 15.9374 3.2629 15.8386 3.08709 15.6628C2.91127 15.487 2.8125 15.2485 2.8125 14.9999C2.8125 14.7513 2.91127 14.5128 3.08709 14.337C3.2629 14.1612 3.50136 14.0624 3.75 14.0624H23.9875L16.2125 6.28741C16.0369 6.11163 15.9383 5.87335 15.9383 5.62491C15.9383 5.37647 16.0369 5.13819 16.2125 4.96241Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </Link>
          </Link>

          <Link
            to={routes.facilities}
            className="section-services__content-cards__card card-instalaciones"
          >
            <h3>Instalaciones de cualquier tipo</h3>
            <Link to={routes.facilities}>
              Ver más
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2125 4.96241C16.3883 4.78684 16.6266 4.68823 16.875 4.68823C17.1234 4.68823 17.3617 4.78684 17.5375 4.96241L26.9125 14.3374C27.0881 14.5132 27.1867 14.7515 27.1867 14.9999C27.1867 15.2483 27.0881 15.4866 26.9125 15.6624L17.5375 25.0374C17.4517 25.1295 17.3482 25.2034 17.2332 25.2546C17.1182 25.3059 16.994 25.3334 16.8682 25.3356C16.7423 25.3379 16.6172 25.3147 16.5005 25.2676C16.3838 25.2204 16.2777 25.1502 16.1887 25.0612C16.0997 24.9722 16.0295 24.8661 15.9823 24.7494C15.9352 24.6327 15.912 24.5076 15.9143 24.3818C15.9165 24.2559 15.944 24.1317 15.9953 24.0167C16.0465 23.9017 16.1204 23.7982 16.2125 23.7124L23.9875 15.9374H3.75C3.50136 15.9374 3.2629 15.8386 3.08709 15.6628C2.91127 15.487 2.8125 15.2485 2.8125 14.9999C2.8125 14.7513 2.91127 14.5128 3.08709 14.337C3.2629 14.1612 3.50136 14.0624 3.75 14.0624H23.9875L16.2125 6.28741C16.0369 6.11163 15.9383 5.87335 15.9383 5.62491C15.9383 5.37647 16.0369 5.13819 16.2125 4.96241Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </Link>
          </Link>

          <Link
            to={routes.cleaning}
            className="section-services__content-cards__card card-lavado"
          >
            <h3>Lavado de Tinacos y cisternas</h3>
            <Link to={routes.cleaning}>
              Ver más
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2125 4.96241C16.3883 4.78684 16.6266 4.68823 16.875 4.68823C17.1234 4.68823 17.3617 4.78684 17.5375 4.96241L26.9125 14.3374C27.0881 14.5132 27.1867 14.7515 27.1867 14.9999C27.1867 15.2483 27.0881 15.4866 26.9125 15.6624L17.5375 25.0374C17.4517 25.1295 17.3482 25.2034 17.2332 25.2546C17.1182 25.3059 16.994 25.3334 16.8682 25.3356C16.7423 25.3379 16.6172 25.3147 16.5005 25.2676C16.3838 25.2204 16.2777 25.1502 16.1887 25.0612C16.0997 24.9722 16.0295 24.8661 15.9823 24.7494C15.9352 24.6327 15.912 24.5076 15.9143 24.3818C15.9165 24.2559 15.944 24.1317 15.9953 24.0167C16.0465 23.9017 16.1204 23.7982 16.2125 23.7124L23.9875 15.9374H3.75C3.50136 15.9374 3.2629 15.8386 3.08709 15.6628C2.91127 15.487 2.8125 15.2485 2.8125 14.9999C2.8125 14.7513 2.91127 14.5128 3.08709 14.337C3.2629 14.1612 3.50136 14.0624 3.75 14.0624H23.9875L16.2125 6.28741C16.0369 6.11163 15.9383 5.87335 15.9383 5.62491C15.9383 5.37647 16.0369 5.13819 16.2125 4.96241Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </Link>
          </Link>
        </div>
      </section>

      <section className="section-specialization" id="specialization">
        <div className="section-specialization__description">
          <h2>Transforma Tu Espacio.</h2>
          <div className="description__paragraphs">
            <p>
              ¿Buscas transformar completamente tu departamento o negocio con
              detalles como pisos de porcelanato, plafones, y paredes de alta
              calidad?
            </p>
            <p>
              O simplemente necesitas reparaciones en la tabla roca. Sea cual
              sea tu necesidad, estás en el lugar correcto.
            </p>
          </div>
        </div>

        <div className="section-specialization__image">
          <img src={imageFinishes} alt="remodelacion" />
        </div>
      </section>
    </Fragment>
  );
}

export default Services;
