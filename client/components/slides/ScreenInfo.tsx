import React from "react";

interface SlideData {
  buttonText: string;
}

interface ScreenInfoObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
  image: string;
  imageText: string;
  title: string;
  description: string;
}

interface ScreenInfoProps {
  slideObject: ScreenInfoObject;
  onButtonClick: (buttonText: string) => void;
}

const ScreenInfo: React.FC<ScreenInfoProps> = ({
  slideObject,
  onButtonClick,
}) => {
  const { data, imageText, title, description } = slideObject;

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] pb-11 flex-col items-center bg-white relative">
      <div className="flex h-[720px] max-w-[450px] flex-col items-start flex-shrink-0 w-full relative">
        <div className="flex flex-col items-start flex-1 w-full relative">
          {/* Main */}
          <div className="flex px-6 flex-col justify-center items-center gap-[26px] flex-1 w-full relative">
            {/* Image with overlay */}
            <div className="flex flex-col items-center relative">
              <div className="flex flex-col items-center relative">
                <div className="relative">
                  <img
                    className="w-[372px] h-[372px] rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] relative"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a9fba2e9d142108bded0b55895383d600385424f?width=744"
                    alt="Founder giving a presentation on stage"
                  />
                  <div className="flex w-auto h-10 px-4 py-2 flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-20 rounded-full bg-white/90 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
                    <div className="text-gray-800 text-center font-poppins text-base font-semibold leading-6 relative">
                      {imageText}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center items-center gap-[-24px] relative">
              <div className="flex w-[332px] py-[13px] px-0 pb-[14px] flex-col items-center relative">
                <div className="text-studevo-purple text-center font-poppins text-[30px] font-bold leading-9 italic relative">
                  {title}
                </div>
              </div>
              <div className="flex py-[21px] px-0 pb-[14px] flex-col items-start relative">
                <div className="flex flex-col items-center relative">
                  <div className="text-studevo-navy-50 text-center font-poppins text-lg font-normal leading-7 italic relative">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="flex p-4 flex-col items-start w-full relative">
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
  );
};

export default ScreenInfo;
