import { Fragment } from "react";
import phoneImage from "../../assets/images/phone.png";
import whatsappImage from "../../assets/images/whatsapp.png";
import emailImage from "../../assets/images/email.png";
import mapImage from "../../assets/images/map.png";
import "./Contact.css";

function Contact() {
  return (
    <Fragment>
      <section className="section-contact" id="contact">
        <div className="container-title">
          <p className="subtitle">Contacto</p>
          <h2>¡Comunicate con nosotros!</h2>
        </div>

        <div className="section-contact__info">
          <div className="content-map">
            <img src={mapImage} alt="map" />
          </div>

          <div className="content-information">
            <h4>Atendemos en CDMX y zona Metropolitana del valle de México</h4>
            <p>Nos ubicamos cerca de la Agricola Oriental</p>

            <div className="content-information__item">
              <p>Llamanos, o mandanos un Whatsapp al número:</p>
              <div className="icons">
                <a href="tel:+525567784821">
                  <img src={phoneImage} alt="telefono" />
                </a>
                <a href="#">
                  <img src={whatsappImage} alt="whatsapp" />
                </a>
                <a href="tel:+525567784821" className="text-contact">
                  (+52) 5567784821
                </a>
              </div>
            </div>

            <div className="content-information__item">
              <p>También puedes mandarnos un correo al:</p>
              <div className="icons">
                <a href="mailto:construcciones.fixmarq@gmail.com">
                  <img src={emailImage} alt="email" />
                </a>
                <a href="mailto:construcciones.fixmarq@gmail.com" className="text-contact">
                  construcciones.fixmarq@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-form">
        <p className="subtitle subtitle-big">O bien, nosotros te contactamos</p>
        <form className="form">
          <div className="form__group">
            <div className="form__item">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Tu nombre"
              />
            </div>
            <div className="form__item">
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                name="asunto"
                id="asunto"
                placeholder="Asunto"
              />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="email">Correo o Teléfono</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Correo electrónico o teléfono"
            />
          </div>
          <div className="form__item">
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Escribe algun mensaje..."
            />
          </div>

          <button className="button button-primary">Enviar formulario</button>
        </form>
      </section>
    </Fragment>
  );
}

export default Contact;
