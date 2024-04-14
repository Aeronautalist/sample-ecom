import "./product-info.css";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import showToast from "../../utils/showToast";

type productInfoProps = {
  imageName: String;
  headerText: String;
  mainText: String;
  buttonText: String;
};

function ProductInfo({
  imageName,
  headerText,
  mainText,
  buttonText,
}: productInfoProps) {
  return (
    <div
      className="product-info"
      style={{
        backgroundImage: `url(src/assets/${imageName}.jpg)`,
      }}
    >
      <div className="product-info-text">
        <h3>{headerText}</h3>
        <div>{mainText}</div>
        <SlButton
          onClick={() => showToast("Product Info Button Pressed")}
          className="product-info-button alertProvider"
          pill
        >
          {buttonText}
        </SlButton>
      </div>
    </div>
  );
}

export default ProductInfo;
