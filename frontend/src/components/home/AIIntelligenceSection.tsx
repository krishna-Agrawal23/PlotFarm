import React from "react";

const features = [
  {
    icon: "query_stats",
    title: "Live Market Scraping",
    description:
      "Real-time data feeds from every major listing source, aggregating hidden gems before they hit the mainstream market.",
  },
  {
    icon: "psychology",
    title: "Expert AI Insights",
    description:
      "Predictive analytics on value appreciation and investment potential, tailored to your financial goals.",
  },
  {
    icon: "location_city",
    title: "Best Area Suggestions",
    description:
      "Neighborhood matching based on your lifestyle habits, commute preferences, and local amenities.",
  },
];

const AIIntelligenceSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F6] py-24">

      {/* Background Glow */}
      <div className="absolute -top-36 -left-28 w-[380px] h-[380px] rounded-full bg-[#863232]/15 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#301A1A]/20 blur-[180px]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">

        {/* Header */}

        <div className="text-center mb-16">
          <div className="font-space-mono text-sm uppercase tracking-[0.35em] text-[#D4755B] mb-4">
            Why Choose AI?
          </div>

          <h2 className="font-fraunces text-5xl text-[#111827] mb-6">
            AI-Powered Property Intelligence
          </h2>

          <p className="font-manrope font-light text-lg text-[#4B5563] max-w-[760px] mx-auto leading-8">
            We leverage advanced algorithms to give you a competitive edge in
            the market, turning data into your dream home.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                p-8
                bg-[linear-gradient(135deg,#863232_0%,#301A1A_100%)]
                border
                border-white/10
                backdrop-blur-2xl
                shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_35px_70px_rgba(0,0,0,0.45)]
              "
            >

              {/* Glass Reflection */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[28px]
                  bg-gradient-to-br
                  from-white/15
                  via-white/5
                  to-transparent
                "
              />

              {/* Moving Glow */}

              <div
                className="
                  absolute
                  -top-24
                  -left-20
                  h-60
                  w-60
                  rounded-full
                  bg-white/10
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:translate-x-12
                "
              />

              {/* Inner Border */}

              <div className="absolute inset-[1px] rounded-[27px] border border-white/10 pointer-events-none" />

              {/* Content */}

              <div className="relative z-10">

                {/* Icon */}

                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6">

                  <span className="font-material-icons text-3xl text-[#FFB28D]">
                    {feature.icon}
                  </span>

                </div>

                <h3 className="font-syne font-bold text-2xl text-white mb-4">
                  {feature.title}
                </h3>

                <p className="font-manrope text-[15px] leading-7 text-white/70">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceSection;