import "./promo.css";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import showToast from "../../utils/showToast.ts";

function Promo() {
  return (
    <div className="promo">
      <div className="promo-text">
        Get our 4 Bill Pay 5G Contract <b>half price</b> for 6 months!
      </div>
      <SlButton
        onClick={() => showToast("Buy Now Pressed")}
        pill
        className="promo-button"
      >
        Buy Now
      </SlButton>
    </div>
  );
}
export default Promo;
