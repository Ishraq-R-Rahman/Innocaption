import "./ImagedDiv.css";
import SectionButtons from "../components/SectionButtons";
// eslint-disable-next-line react/prop-types
function ImagedDiv({ image, noButton, text, buttonText, onClick }) {
    return (
        <div
            className="background-image-container"
            style={{
                background: `url(${image}) no-repeat center center`,
            }}
        >
            {!noButton && (
                <div className="content-container">
                    <h1>{text}</h1>
                    <SectionButtons text={buttonText} onClick={onClick} />
                </div>
            )}
        </div>
    );
}

export default ImagedDiv;
