import { useEffect, useMemo, useState } from "react";
import { Link } from "@remix-run/react";
import Slider from "react-slick";
import {
  FaWordpress,
  FaShopify,
  FaSquarespace,
  FaWix,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandVite,
  TbBrandNuxt,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiExpo } from "react-icons/si";

const ICONS_MAP = [
  {
    id: "word-press",
    title: "WordPress",
    component: FaWordpress,
  },
  {
    id: "shopify",
    title: "Shopify",
    component: FaShopify,
  },
  {
    id: "square-space",
    title: "SquareSpace",
    component: FaSquarespace,
  },
  {
    id: "wix",
    title: "Wix",
    component: FaWix,
  },
  {
    id: "react",
    title: "React",
    component: FaReact,
  },
  {
    id: "react-native",
    title: "React-Native",
    component: TbBrandReactNative,
  },
  {
    id: "nextjs",
    title: "Next",
    component: TbBrandNextjs,
  },
  {
    id: "expo",
    title: "Expo",
    component: SiExpo,
  },
  {
    id: "vite",
    title: "Vite",
    component: TbBrandVite,
  },
  {
    id: "nuxt",
    title: "Nuxt",
    component: TbBrandNuxt,
  },
  {
    id: "vue",
    title: "Vue",
    component: FaVuejs,
  },
];

export default function StackCarousel() {
  const carouselSettings = useMemo(
    () => ({
      infinite: true,
      arrows: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      speed: 4000,
      centerMode: true,
      className: "center",
      responsive: [
        {
          breakpoint: 9000,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            className: "",
            centerMode: false,
          },
        },
      ],
    }),
    []
  );

  const [isClientReady, setClientStatus] = useState(false);

  useEffect(() => {
    !isClientReady && setClientStatus(true);
  }, [isClientReady]);

  useEffect(() => {
    let resizeTimeout:
      | ((callback: () => void, ms?: number | undefined) => number)
      | undefined;

    window.addEventListener("resize", () => {
      !!resizeTimeout && clearTimeout(resizeTimeout as never);
      setClientStatus(false);
      resizeTimeout = setTimeout(() => {
        setClientStatus(true);
      }, 100) as never;
    });
  }, []);

  return (
    <div className="flex flex-col w-full select-none py-8 flex-1">
      <h2 className="text-4xl text-slate-700 text-center pb-6 px-3">
        Choose your preferred platform:
      </h2>
      {isClientReady ? (
        <Slider {...carouselSettings}>
          {/* Adding map twice to reduce loading when number of slides is equal lenght of array */}
          {[...ICONS_MAP, ...ICONS_MAP].map(
            ({ component, id, title }, index) => (
              <div
                key={`${id}-${index}`}
                className="flex flex-col text-slate-500 hover:text-slate-100 text-center"
              >
                {component({
                  fontSize: 60,
                  className: "text-8xl m-auto mb-2",
                })}
                <span className="text-lg text-center text-inherit">
                  {title}
                </span>
              </div>
            )
          )}
        </Slider>
      ) : (
        // Spacer when Slider is loading
        <div className="w-full h-32 pb-3" />
      )}
      <div className="flex flex-col justify-center p-4 md:p-8 w-full items-center gap-3">
        <h3 className="text-2xl text-center">
          If you are unsure what option to choose...
        </h3>
        <Link to="/">
          <div className="primary-button">Talk to us</div>
        </Link>
        <h4 className="text-lg  text-center">
          Chat to our specialists to find the best choice for you!
        </h4>
      </div>
    </div>
  );
}
