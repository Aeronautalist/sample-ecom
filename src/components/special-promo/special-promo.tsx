import "./special-promo.css";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import showToast from "../../utils/showToast.ts";

function SpecialPromo() {
  return (
    <div id="special-promo">
      <div
        className="special-promo-card"
        style={{
          backgroundImage: "url(src/assets/broadband.jpg)",
        }}
      >
        <div className="special-promo-card-text">
          <div>Superfast unlimited Broadband</div>
          <h3>Get up to 6 months free when you switch now!</h3>
          <SlButton
            onClick={() => showToast("Special Promo Button 1 Pressed")}
            pill
          >
            Learn More
          </SlButton>
        </div>
      </div>

      <div
        className="special-promo-card"
        style={{
          backgroundImage: "url(src/assets/phone-wall.jpg)",
        }}
      >
        <div className="special-promo-card-text">
          <div>Switch to 4 Prepay</div>
          <h3>Switch and save up to €100!</h3>
          <SlButton
            onClick={() => showToast("Special Promo Button 2 Pressed")}
            pill
          >
            Switch Now
          </SlButton>
        </div>
      </div>
    </div>
  );
}

export default SpecialPromo;
