import "./quick-buy-carousel.css";
import { SlCarousel } from "@shoelace-style/shoelace/dist/react";
import { SlCarouselItem } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlBadge } from "@shoelace-style/shoelace/dist/react";
import showToast from "../../utils/showToast.ts";

import { useRef, useEffect, useState } from "react";

const mockPhoneData = [
  {
    name: "4-phone-Next",
    fullPrice: 530,
    salePrice: 500,
    additonalInfo: "New",
  },
  { name: "4-phone", fullPrice: 220, salePrice: 99 },
  {
    name: "4-phone-2",
    fullPrice: 240,
    salePrice: 120,
    additonalInfo: "Online Exclusive",
  },
  { name: "qPhone", fullPrice: 150, salePrice: 99 },
  { name: "4-phone-3", fullPrice: 260, salePrice: 240 },
  {
    name: "qPhone-Z",
    fullPrice: 180,
    salePrice: 130,
    additonalInfo: "Low Stock",
  },
  { name: "4-phone-4", fullPrice: 300, salePrice: 150 },
  { name: "qPhone-X", fullPrice: 250, salePrice: 200 },
  { name: "4-phone-6", fullPrice: 500, salePrice: 350 },
  { name: "qPhone-Y", fullPrice: 300, salePrice: 180 },
];

// Apply some hue rotation to make it look like they're different phones
const applyFilter = (i: number) => {
  return `hue-rotate(${(360 / mockPhoneData.length) * i}deg)`;
};

function QuickBuyCarousel() {
  const ref = useRef(null);
  const [slideCount, setSlideCount] = useState(5);
  const CARD_WIDTH = 400;

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const cardsThatCanFit = Math.ceil(
        ref.current.getBoundingClientRect().width / CARD_WIDTH
      );

      setSlideCount(cardsThatCanFit);
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={ref} id="quick-buy-carousel">
      <SlCarousel
        className="quick-buy-carousel-slcarousel"
        navigation
        slidesPerPage={slideCount}
        slidesPerMove={1}
      >
        {mockPhoneData.map((phoneData, i) => {
          return (
            <SlCarouselItem
              key={phoneData.name}
              className="quick-buy-carousel-item"
            >
              <SlCard className="quick-buy-carousel-card">
                <img
                  slot="image"
                  src="src/assets/phone-generic.jpg"
                  alt="A generic smart phone"
                  style={{ filter: `${applyFilter(i)}` }}
                />
                <strong>{phoneData.name}</strong>
                <div>
                  <strong>€{phoneData.salePrice}</strong>
                  <div className="old-price">€{phoneData.fullPrice}</div>
                </div>
                {phoneData.additonalInfo && (
                  <SlBadge pulse>{phoneData.additonalInfo}</SlBadge>
                )}
                <br />
                Buy now to save €{phoneData.fullPrice - phoneData.salePrice}!
                <br />
                <SlButton
                  className="quick-buy-carousel-button"
                  onClick={() => showToast(`${phoneData.name} Pressed`)}
                  variant="primary"
                  pill
                >
                  Buy Now!
                </SlButton>
              </SlCard>
            </SlCarouselItem>
          );
        })}
      </SlCarousel>
    </div>
  );
}

export default QuickBuyCarousel;
