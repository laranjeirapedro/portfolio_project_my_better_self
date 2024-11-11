import { useMemo } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const FeatureSection = () => {
  const features = useMemo(
    () => [
      {
        name: "Web & Mobile App Development",
        subtitle: "Build with Confidence",
        description:
          "Transform your ideas into impactful applications with our expert team and state-of-the-art technology, crafted to meet your business goals and ensure exceptional user experiences.",
        icon: MdWeb,
      },
      {
        name: "Comprehensive Digital Business Management",
        subtitle: "Effortless and Reliable",
        description:
          "Streamline your digital operations with our all-in-one service suite that handles hosting, maintenance, and development, giving you more time to innovate and grow.",
        icon: BsGraphUpArrow,
      },
      {
        name: "Consulting Excellence",
        subtitle: "Guided Growth",
        description:
          "Navigate the digital landscape with expert guidance designed to optimize your processes, enhance scalability, and drive your business toward long-term success.",
        icon: FaUsers,
      },
    ],
    []
  );

  return (
    <div className="py-12 sm:py-12 select-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Bring Your Business to the Next Level
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Transform Your Ideas into Real-Life Products
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Ready to take your business to the next level? Contact us today and
            start transforming your vision into reality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {feature.icon({ className: "h-6 w-6 text-white" })}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
