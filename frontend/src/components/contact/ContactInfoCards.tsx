import React from 'react';

const ContactInfoCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visit Our Office Card */}
      <div className="bg-white border border-[#E6E0DA] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(212,117,91,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#D4755B]">
              location_on
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#221410] mb-2">
              Visit Our Office
            </h3>
            <p className="font-manrope font-extralight text-sm text-[#4B5563] leading-relaxed mb-3">
              ,<br />
              Ujjain, Madhya Pradhesh<br />
            </p>
            <a 
              href="https://www.google.com/maps/place/MIT+Group+of+Institutes,+Ujjain/@23.0968815,75.8921733,17z/data=!4m14!1m7!3m6!1s0x39630d60c0c92465:0x3814ed48f9340f85!2sMIT+Group+of+Institutes,+Ujjain!8m2!3d23.0968815!4d75.8947536!16s%2Fm%2F043kfqj!3m5!1s0x39630d60c0c92465:0x3814ed48f9340f85!8m2!3d23.0968815!4d75.8947536!16s%2Fm%2F043kfqj?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-manrope font-medium text-sm text-[#D4755B] hover:text-[#C05621] transition-colors"
            >
              <span>Get Directions</span>
              <span className="material-icons text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Call or Email Us Card */}
      <div className="bg-white border border-[#E6E0DA] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(212,117,91,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#D4755B]">
              phone
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#221410] mb-3">
              Call or Email Us
            </h3>
            <div className="space-y-2">
              <a 
                href="tel:+9173xx89xxxx" 
                className="flex items-center gap-2 font-manrope font-extralight text-sm text-[#4B5563] hover:text-[#D4755B] transition-colors"
              >
                <span className="material-icons text-base">
                  call
                </span>
                <span>+91 73xxxx89xx</span>
              </a>
              <a 
                href="mailto:krishnaagr218@gmail.com" 
                className="flex items-center gap-2 font-manrope font-extralight text-sm text-[#4B5563] hover:text-[#D4755B] transition-colors"
              >
                <span className="material-icons text-base">
                  email
                </span>
                <span>krishnaagr218@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Card */}
      <div className="bg-white border border-[#E6E0DA] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(212,117,91,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#D4755B]">
              schedule
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#221410] mb-3">
              Business Hours
            </h3>
            <div className="space-y-2 font-manrope font-extralight text-sm text-[#4B5563]">
              <div className="flex justify-between items-center">
                <span>Mon - Fri:</span>
                <span className="font-medium text-[#221410]">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday:</span>
                <span className="font-medium text-[#221410]">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday:</span>
                <span className="font-medium text-[#221410]">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;