import React from "react";

const steps = [
  {
    number: "01",
    title: "Profile Analysis",
    description:
      "Our AI deep-dives into your preferences, lifestyle needs, and financial goals to build a comprehensive buyer profile.",
  },
  {
    number: "02",
    title: "Smart Matching",
    description:
      "Algorithms scan thousands of listings to find properties that align with your unique criteria, filtering out the noise.",
  },
  {
    number: "03",
    title: "Virtual Tours & Insights",
    description:
      "Experience homes remotely with immersive 3D tours and receive detailed neighborhood analytics reports.",
  },
  {
    number: "04",
    title: "Seamless Closing",
    description:
      "From offer to keys, our digital platform handles paperwork, negotiations, and closing logistics effortlessly.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section
      className="py-28"
      style={{
        backgroundColor: "rgba(167,2,2,0.15)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8">

        <div className="grid lg:grid-cols-12 gap-24 items-start">

          {/* LEFT */}

          <div className="lg:col-span-4">

            <div className="sticky top-28">

              <p className="font-space-mono uppercase tracking-[0.35em] text-[#D4755B] text-sm mb-6">
                Process
              </p>

              <h2 className="font-fraunces text-[56px] leading-[1.08] text-[#2E1919]">

                The Path to
                <br />

                Your
                <br />

                <span className="italic text-[#D4755B]">
                  New Beginning
                </span>

              </h2>

              <p className="font-manrope text-[20px] leading-8 text-[#4E3939] mt-8 max-w-[360px]">
                We've simplified the complex journey of buying a home into four
                seamless, AI-assisted steps.
              </p>

              <button
                className="
                  mt-10
                  px-7
                  py-3
                  rounded-full
                  bg-[#A70202]
                  text-white
                  font-medium
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                Explore With Us →
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-8">

            <div className="space-y-10">

              {steps.map((step) => (

                <div
                  key={step.number}
                  className="flex items-start gap-11"
                >

                  {/* Number */}

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-11
                      h-11
                      rounded-full
                      bg-white/45
                      border
                      border-white/50
                      backdrop-blur-sm
                      flex-shrink-0
                    "
                  >
                    <span className="font-space-mono text-[14px] text-[#735555]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}

                  <div>

                    <h3
                      className="
                        font-fraunces
                        text-[30px]
                        leading-none
                        text-[#2F1C1C]
                        mb-3
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        font-manrope
                        text-[16px]
                        leading-7
                        text-[#5D4747]
                        max-w-[620px]
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;