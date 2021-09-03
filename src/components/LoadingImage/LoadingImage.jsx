import "./LoadingImage.css";
import image from "../../images/image-cat.gif";

function LoadingImage({ isVisible }) {
  return (
    <div className={`overlay ${isVisible && "overlay_visible"}`}>
      <img className="overlay__image" src={image} alt="cat"/>
    </div>
  );
}

export default LoadingImage;
