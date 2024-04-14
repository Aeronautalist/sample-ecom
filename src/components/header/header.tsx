import "./header.css";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";

import Banner from "../banner/banner";
import Promo from "../promo/promo";
import CustomDropdown from "../custom-dropdown/custom-dropdown";
import showToast from "../../utils/showToast.ts";

function Header() {
  return (
    <div id="header">
      <Banner
        left={
          <>
            <CustomDropdown
              text="Phones and Plans"
              menuItems={[
                "Bill Pay Phones",
                "Bill Pay Plans",
                "Bill Pay SIM Only",
                "hr",
                "Prepay Phones",
                "Prepay Plans",
                "Prepay SIM Only",
                "hr",
                "Check for Upgrade",
                "hr",
                "Latest from App",
                "Latest from Sam",
              ]}
            ></CustomDropdown>
            <CustomDropdown
              text="Accessories"
              menuItems={[
                "Bill Pay Phones",
                "Bill Pay Plans",
                "Bill Pay SIM Only",
                "hr",
                "Bill Pay Phones",
                "Bill Pay Plans",
                "Bill Pay SIM Only",
                "hr",
                "Check for Upgrade",
                "hr",
                "Latest from App",
                "Latest from Sam",
              ]}
            ></CustomDropdown>
            <CustomDropdown
              text="Accessories"
              menuItems={undefined}
            ></CustomDropdown>
          </>
        }
        right={
          <>
            <CustomDropdown
              text="Why Four?"
              menuItems={[
                "Four Rewards",
                "Refer a Friend",
                "5G 4 All",
                "Benefits",
                "Flexible Options",
              ]}
            ></CustomDropdown>
            <SlIcon
              className="app-banner-icon"
              name="search-heart-fill"
              onClick={() => showToast("Search Pressed")}
            ></SlIcon>
            <SlIcon
              onClick={() => showToast("Cart Pressed")}
              className="app-banner-icon"
              name="cart-fill"
            ></SlIcon>
            <SlButton
              onClick={() => showToast("My 4 Button Pressed")}
              className="app-banner-button"
              pill
            >
              My 4
            </SlButton>
          </>
        }
      ></Banner>
      <Promo></Promo>
    </div>
  );
}

export default Header;
