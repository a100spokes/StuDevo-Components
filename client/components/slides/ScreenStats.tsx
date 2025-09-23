import React from 'react';

interface SlideData {
  image: string;
  buttonText: string;
  title: string;
  description: string;
}

interface ScreenStatsObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
}

interface ScreenStatsProps {
  slideObject: ScreenStatsObject;
  onButtonClick: (buttonText: string) => void;
}

const ScreenStats: React.FC<ScreenStatsProps> = ({ slideObject, onButtonClick }) => {
  const { data } = slideObject;

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] pt-[59px] pb-11 flex-col items-center bg-white relative">
      <div className="flex h-[661px] max-w-[450px] flex-col items-center flex-shrink-0 w-full relative">
        <div className="flex flex-col items-start gap-[26px] flex-1 w-full relative">
          <div className="flex flex-col items-start gap-[67px] flex-1 w-full relative">
            
            {/* Main Content */}
            <div className="flex h-[509px] px-6 flex-col justify-center items-center w-full relative">
              
              {/* Chart Image */}
              <div className="flex flex-col items-center relative">
                <div className="flex flex-col items-center relative">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cc9b5eaa53df5a69266f6b25975b356b7c6fcd7?width=744"
                    className="w-[372px] h-[372px] rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] relative"
                    alt="AI Progress Chart"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex h-[127px] flex-col items-center gap-[-6px] flex-shrink-0 w-full relative">
                
                {/* Title */}
                <div className="flex h-[50px] pt-[83px] pb-[14px] flex-col justify-center items-center flex-shrink-0 w-full relative">
                  <div className="w-full text-studevo-purple text-center font-poppins text-2xl font-bold leading-[23px] relative">
                    {data.title}
                  </div>
                </div>

                {/* Description */}
                <div className="flex h-[145px] py-[29px] flex-col justify-end items-center flex-shrink-0 w-full relative">
                  <div className="flex flex-col items-center w-full relative">
                    <div className="w-full text-studevo-navy-50 text-center font-poppins text-sm font-normal leading-[22px] relative">
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Button */}
            <div className="flex pt-8 flex-col justify-center items-center w-full relative">
              <button
                onClick={() => onButtonClick(data.buttonText)}
                className="flex p-4 justify-center items-center w-full rounded-lg bg-studevo-purple shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] relative hover:bg-opacity-90 transition-all duration-200"
              >
                <div className="flex-1 text-white text-center font-poppins text-base font-bold leading-6 relative">
                  {data.buttonText}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenStats;
