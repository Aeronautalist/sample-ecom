import Header from "./components/header/header";
import CustomCarousel from "./components/custom-carousel/custom-carousel";
import ActionCards from "./components/action-cards/action-cards";
import SpecialPromo from "./components/special-promo/special-promo";
import QuickBuyCarousel from "./components/quick-buy-carousel/quick-buy-carousel";
import ProductInfo from "./components/product-info/product-info";
import Footer from "./components/footer/footer";

import { SlAlert } from "@shoelace-style/shoelace/dist/react";
import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const alert = useRef(null);
  const [alertText, setAlertText] = useState("");

  useEffect(() => {
    const customEvent = (event) => {
      if (alert) {
        setAlertText(event.detail.text);
        alert.current.toast();
      }
    };

    document?.addEventListener("showToast", customEvent);
    return () => document?.removeEventListener("showToast", customEvent);
  }, []);

  // useEffect(() => {
  //   const allButtons = document.querySelectorAll(".alertProvider");
  //   console.log(allButtons);

  //   const customEvent = () => {
  //     const event = new CustomEvent("showToast", {
  //       detail: "buttonClicked",
  //     });
  //     document.dispatchEvent(event);
  //   };

  //   allButtons.forEach((button) => {
  //     button.addEventListener("click", customEvent);
  //   });

  //   return () => {
  //     allButtons.forEach((button) => {
  //       button.removeEventListener("click", customEvent);
  //     });
  //   };
  // }, []);

  return (
    <div id="App">
      <SlAlert ref={alert} variant="success" duration="3000" closable>
        <div id="alert-content">{alertText}</div>
      </SlAlert>
      <Header></Header>
      <CustomCarousel></CustomCarousel>
      <ActionCards
        cards={[
          {
            icon: "phone",
            text: "Phones",
          },
          {
            icon: "file-earmark-richtext",
            text: "Bill Pay Plans",
          },
          {
            icon: "currency-euro",
            text: "Prepay Plans",
          },
          {
            icon: "earbuds",
            text: "Lifestyle Store",
          },
          {
            icon: "router",
            text: "Broadband",
          },
        ]}
      ></ActionCards>
      <SpecialPromo></SpecialPromo>
      <h3 id="best-sellers-header">Best Sellers</h3>
      <QuickBuyCarousel></QuickBuyCarousel>
      <div id="product-info-audio">
        <ProductInfo
          imageName={"headphones-med"}
          headerText={"Up to 20% off Audio"}
          mainText={"Buy now and save on selected products!"}
          buttonText={"Shop Now"}
        ></ProductInfo>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
