import "./Gallery.css";
import { dataGallery } from "../../helpers/gallery";

function Gallery() {
  const renderGallery = () => {
    // calculamos el número de columnas
    const numColumns = Math.ceil(dataGallery.length / 3);
    // creamos un array con el número de columnas
    const columns = [...Array(numColumns).keys()];
    // recorremos el array de columnas
    return columns.map((column, index) => {
      // calculamos el índice de la primera imagen de la columna
      const firstImage = index * 3;
      // calculamos el índice de la última imagen de la columna
      const lastImage = firstImage + 3;
      // obtenemos las imágenes de la columna
      const images = dataGallery.slice(firstImage, lastImage);
      // recorremos las imágenes de la columna
      return (
        <div key={index} className="column">
          {images.map((image, index) => (
            <img key={index} src={image.url} alt="Trabajos realizados" />
          ))}
        </div>
      );
    });
  };

  return (
    <section className="section-gallery" id="gallery">
      <div className="container-title">
        <p className="subtitle">Galería</p>
        <h2>Nuestros Trabajos</h2>
      </div>

      <div className="section-gallery__images">{renderGallery()}</div>
    </section>
  );
}

export default Gallery;
