import { ReactNode } from "react";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import "./banner.css";
type AppProps = {
  left: ReactNode;
  right: ReactNode;
};

function Banner({ left, right }: AppProps) {
  return (
    <div className="banner">
      <div className="banner-holder">
        <SlIcon className="banner-icon" name="4-square"></SlIcon>
        {left}
      </div>
      <div className="banner-holder">{right}</div>
    </div>
  );
}

export default Banner;
