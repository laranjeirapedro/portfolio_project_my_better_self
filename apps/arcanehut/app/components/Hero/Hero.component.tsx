import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, [setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)]?.map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col w-full select-none">
      <div className="bg-indigo-900 w-full relative min-h-96 flex">
        <div className="absolute w-full h-full overflow-hidden  opacity-50 bottom-0">
          <InfiniteLooper speed={80} direction="left">
            <img src="/assets/4272431.webp" style={{ height: "100%" }} alt="" />
          </InfiniteLooper>
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
