import React from 'react';

interface HeaderBlock {
  title: string;
  description: string;
  icon: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface Branding {
  copyright: string;
  headerBlocks: HeaderBlock[];
  footerLinks: FooterLink[];
}

interface SlideData {
  heroImage: string;
  heroImageAlt: string;
  title: string;
  description: string;
  buttonText_1: string;
  buttonText_2: string;
  buttonPulse: boolean;
  branding: Branding;
}

interface SlideObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
}

interface LandindSlideProps {
  slideObject: SlideObject;
  onButtonClick: (buttonText: string) => void;
}

const LandindSlide: React.FC<LandindSlideProps> = ({ slideObject, onButtonClick }) => {
  const { data } = slideObject;
  const { heroImage, heroImageAlt, title, description, buttonText_1, buttonText_2, branding } = data;

  return (
    <div className="flex w-full max-w-[420px] mx-auto min-h-screen pb-3.5 flex-col items-center bg-white relative">
      <div className="flex h-full max-w-[450px] px-[15px] flex-col justify-end items-center gap-11 flex-1 relative">
        
        {/* Header Blocks */}
        <div className="flex h-[49px] justify-center items-start gap-4 flex-shrink-0 w-full relative">
          {branding.headerBlocks.map((block, index) => (
            <div key={index} className="flex p-[13px] justify-center items-center flex-1 border rounded-lg border-studevo-border relative">
              <div className="flex pr-2 flex-col items-start relative">
                <div className="text-studevo-indigo font-['Material_Icons'] text-2xl font-normal leading-6 relative">
                  {index === 0 ? 'check_circle' : 'star'}
                </div>
              </div>
              <div className="flex flex-col items-start relative">
                <div className="flex flex-col items-start w-full relative">
                  <div className="text-studevo-gray font-poppins text-[11px] font-normal leading-4 relative">
                    {block.title}
                  </div>
                </div>
                <div className="flex flex-col items-start relative">
                  <div className="w-[127px] text-studevo-navy font-poppins text-[11px] font-semibold leading-5 relative">
                    {block.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <img 
          className="flex w-[276px] h-[256px] justify-center items-start gap-2.5 flex-shrink-0 aspect-[69/64] rounded-lg shadow-[10px_10px_30px_10px_rgba(79,70,229,0.1)] relative"
          src="https://api.builder.io/api/v1/image/assets/TEMP/c843a4f0bd4543e139a96a37dba84d1f462d9db5?width=552"
          alt={heroImageAlt}
        />

        {/* Content Section */}
        <div className="flex flex-col items-start w-full relative">
          {/* Title */}
          <div className="flex flex-col items-center w-full relative">
            <div className="text-studevo-navy text-center font-poppins text-[28px] font-bold leading-9 relative">
              {title}
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-[35px] w-full relative">
            {/* Description */}
            <div className="flex h-6 flex-col items-center w-full relative">
              <div className="text-studevo-navy-50 text-center font-poppins text-base font-normal leading-6 relative">
                {description}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-4 w-full relative">
              <button 
                onClick={() => onButtonClick(buttonText_1)}
                className="flex px-[62.78px] py-4 justify-center items-center flex-1 rounded-lg bg-studevo-purple relative group hover:bg-opacity-90 transition-all duration-200"
              >
                <div className="text-white text-center font-poppins text-base font-semibold leading-6 relative">
                  {buttonText_1}
                </div>
                <div className="flex pl-2 flex-col items-start relative">
                  <div className="flex flex-col items-center relative">
                    <div className="text-white text-center font-['Material_Icons'] text-2xl font-normal leading-6 relative">
                      chevron_right
                    </div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => onButtonClick(buttonText_2)}
                className="flex px-[64.84px] py-4 justify-center items-center flex-1 rounded-lg bg-studevo-purple relative group hover:bg-opacity-90 transition-all duration-200"
              >
                <div className="text-white text-center font-poppins text-base font-semibold leading-6 relative">
                  {buttonText_2}
                </div>
                <div className="flex pl-2 flex-col items-start relative">
                  <div className="flex flex-col items-center relative">
                    <div className="text-white text-center font-['Material_Icons'] text-2xl font-normal leading-6 relative">
                      chevron_right
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start gap-2 w-full relative">
          {/* Terms and Links */}
          <div className="h-8 w-full relative">
            <div className="flex w-[322px] h-4 flex-col justify-center flex-shrink-0 text-studevo-gray text-center font-poppins text-xs font-normal leading-4 absolute left-3 top-0">
              <span>By proceeding, you agree with </span>
              <a href={branding.footerLinks[0]?.href || '#'} className="underline inline">Terms and Conditions</a>
              <span>, </span>
            </div>
            <div className="w-[260px] h-8 flex-shrink-0 absolute left-[117px] top-[-1px]">
              <a href={branding.footerLinks[1]?.href || '#'} className="flex w-11 h-4 flex-col justify-center flex-shrink-0 text-studevo-gray text-center font-poppins text-xs font-normal leading-4 underline absolute left-[217px] top-[1px]">
                Privacy
              </a>
              <a href={branding.footerLinks[1]?.href || '#'} className="flex w-[35px] h-4 flex-col justify-center flex-shrink-0 text-studevo-gray text-center font-poppins text-xs font-normal leading-4 underline absolute left-0 top-[17px]">
                Policy
              </a>
            </div>
            <div className="flex w-[121px] h-4 flex-col justify-center flex-shrink-0 text-studevo-gray text-center font-poppins text-xs font-normal leading-4 absolute left-[152px] top-4">
              <span>, </span>
              <a href={branding.footerLinks[2]?.href || '#'} className="underline inline">Subscription Terms</a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full text-studevo-gray text-center font-poppins text-xs font-normal leading-4 relative">
              {branding.copyright}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandindSlide;
