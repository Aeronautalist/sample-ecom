import "./custom-carousel.css";
import { SlCarousel } from "@shoelace-style/shoelace/dist/react";
import { SlCarouselItem } from "@shoelace-style/shoelace/dist/react";
import ProductInfo from "../product-info/product-info";

function CustomCarousel() {
  return (
    <div id="custom-carousel">
      <SlCarousel
        className="custom-carousel-slcarousel"
        pagination
        navigation
        mouse-dragging
      >
        <SlCarouselItem>
          <ProductInfo
            imageName={"phone-orange-med"}
            headerText={"The new 4 phone HD+"}
            mainText={"Switch to the 4 network and get it for just €50"}
            buttonText={"Buy Now!"}
          ></ProductInfo>
        </SlCarouselItem>
        <SlCarouselItem>
          <ProductInfo
            imageName={"phone-hand-med"}
            headerText={"Get more from your phone"}
            mainText={"New Bill Pay Plans that work for you!"}
            buttonText={"Buy Now!"}
          ></ProductInfo>
        </SlCarouselItem>
        <SlCarouselItem>
          <ProductInfo
            imageName={"phone-bubbles-med"}
            headerText={"Check out all our deals"}
            mainText={"Find the phone that suits you"}
            buttonText={"Buy Now!"}
          ></ProductInfo>
        </SlCarouselItem>
      </SlCarousel>
    </div>
  );
}

export default CustomCarousel;
