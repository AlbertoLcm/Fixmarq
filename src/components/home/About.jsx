import flexometro from "../../assets/flexometro.svg";
import remodelacionImage from "../../assets/remodelacion.jpg";
import "./About.css";

function About() {
  return (
    <section className="section-about" id="about">
      <img src={flexometro} alt="flexometro" className="image-flexometro" />
      <div className="section-about__container">
        <div className="section-about__description">
          <h2>¿Qué somos?</h2>
          <div className="description__paragraphs">
            <p>
              Somos un equipo que trabaja apasionadamente por la transformación
              de espacios y la modernización constante.
            </p>
            <p>
              Somos confiables en servicios de acabados de interiores,
              instalaciones de todo tipo como pantallas, lamparas luces led etc.
              y limpieza de tinacos y cisternas.
            </p>
            <p>
              Transformamos espacios y garantizamos la excelencia en cada
              proyecto. Descubre cómo podemos hacer la diferencia en tu hogar o
              negocio.
            </p>
            <button
              className="button button-primary"
              onClick={() => {
                const section = document.getElementById("gallery");
                section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Nuestra Galería
            </button>
          </div>
        </div>

        <div className="section-about__image">
          <img src={remodelacionImage} alt="remodelacion" />
        </div>
      </div>
    </section>
  );
}

export default About;
