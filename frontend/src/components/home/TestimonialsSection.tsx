  import React from 'react';
  

  const TestimonialsSection: React.FC = () => {
    return (
      <section className="bg-[#F7F6F3] py-28 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-16">
            <div>
              <div className="font-space-mono text-[13px] uppercase tracking-[0.35em] text-[#D4755B] mb-4">Testimonials</div>
              <h2 className="font-fraunces italic font-normal text-[58px] leading-none text-[#111827]">What Our Clients Say</h2>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-[#937070] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(0,0,0,0.35)] ">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons text-[#FFD43B] text-[18px]" >star</span>
                ))}
              </div>
              <p className="font-manrope text-[14px] leading-6 text-white/90 mb-8">
                PlotFarm's AI matched us with our dream home in just 2 weeks. The process was seamless and personalized.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
                <div>
                  <div className="font-syne font-semibold text-sm text-white">Sarah Johnson</div>
                  <div className="font-manrope text-xs text-white/70">Los Angeles, CA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-[#937070] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(0,0,0,0.35)] ">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons text-[#FFD43B] text-[18px]" >star</span>
                ))}
              </div>
              <p className="font-manrope text-[14px] leading-6 text-white/90 mb-8">
                The neighborhood insights were invaluable. We knew exactly what we were getting before even visiting.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
                <div>
                  <div className="font-syne font-semibold text-sm text-white">Michael Chen</div>
                  <div className="font-manrope text-xs text-white/70">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-[#937070] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(0,0,0,0.35)] ">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons text-[#FFD43B] text-[18px]" >star</span>
                ))}
              </div>
              <p className="font-manrope text-[14px] leading-6 text-white/90 mb-8">
                The AI recommendations were spot-on and saved us months of searching.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
                <div>
                  <div className="font-syne font-semibold text-sm text-white">Emily Rodriguez</div>
                  <div className="font-manrope text-xs text-white/70">Austin, TX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default TestimonialsSection;
