import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@remix-run/react";
import Slider, { Settings } from "react-slick";

export default function Hero() {
  const slider = useRef();

  const carouselSettings: Settings = useMemo(
    () => ({
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      useCSS: true,
      adaptiveHeight: true,
      speed: 200000,
    }),
    [],
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
    <div className="flex flex-col w-full select-none">
      <div className="bg-indigo-900 w-full relative min-h-96 flex">
        <div className="absolute w-full h-full overflow-hidden  opacity-50 bottom-0">
          {isClientReady && (
            <Slider
              {...carouselSettings}
              className="relative w-full h-full bg-blue-200 test"
              ref={slider as never}
            >
              <div>
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/4272431.webp"
                  style={{ height: "100%" }}
                  alt="arcanehut-bg"
                />
              </div>
              <div>
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/4272431.webp"
                  style={{ height: "100%" }}
                  alt="arcanehut-bg"
                />
              </div>
            </Slider>
          )}
        </div>

        <div className="flex flex-col md:flex-row-reverse max-w-6xl m-auto z-10">
          <div className="w-full py-4 pr-4 flex h-60 md:basis-2/5 md:h-80">
            <div className="h-full flex-1 w-72 max-h-full sm:w-full max-w-full">
              <img
                src="/assets/ecommerce-shop.webp"
                alt="Ecommerce Shop"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 pb-4 justify-center items-center  md:basis-3/5">
            <span className="text-md font-normal text-dark text-gray-300">
              Some description
            </span>
            <h1 className="text-3xl font-bold text-center text-gray-300">
              Some Title That possibly breaks in two or more lines
            </h1>

            <Link to="/" className="mt-4">
              <div
                className="primary-button"
                onClick={() => alert("Get Started clicked")}
                aria-hidden="true"
              >
                <span className="text-md font-bold">GET STARTED</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
