import React from "react";

interface Option {
  id: string;
  title: string;
}

interface SlideData {
  title: string;
  description: string;
}

interface Section {
  name: string;
  number: number;
  progressPercent: number;
  sectionCount: number;
}

interface QuestionSlideObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
  options: Option[];
  section: Section;
}

interface QuestionSlideProps {
  slideObject: QuestionSlideObject;
  onOptionSelect: (optionId: string) => void;
  onBack: () => void;
}

const QuestionSlide: React.FC<QuestionSlideProps> = ({
  slideObject,
  onOptionSelect,
  onBack,
}) => {
  const { data, options, section } = slideObject;

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] pt-5 px-5 pb-0 flex-col items-center bg-white relative">
      <div className="flex max-w-[450px] flex-col items-center w-full relative">
        {/* Header */}
        <div className="flex h-[67px] justify-center items-center w-full relative">
          <div className="flex flex-col items-center gap-[15px] flex-1 relative">
            {/* Navigation Bar */}
            <div className="flex px-[20px] pr-[9px] justify-between items-center w-full relative">
              {/* Back Button */}
              <button onClick={onBack} className="w-8 h-8 relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6668 10.6667L12.3335 16L17.6668 21.3334"
                    stroke="#C9CFEC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Title */}
              <div className="text-studevo-purple text-center font-roboto text-base font-normal leading-normal relative">
                {section.name}
              </div>

              {/* Progress Text (Hidden) */}
              <div className="text-transparent text-right font-montserrat text-xs font-normal leading-normal relative">
                <span className="font-bold text-base">1</span>
                <span>/31</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-[380px] h-5 relative">
              {/* Background Progress */}
              <div className="flex w-[380px] items-center absolute left-0 top-0 h-5">
                {/* Empty circles and lines */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C9CFEC"
                    strokeWidth="2"
                  />
                </svg>
                <div className="h-0.5 flex-1 bg-[#C9CFEC] relative"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C9CFEC"
                    strokeWidth="2"
                  />
                </svg>
                <div className="h-0.5 flex-1 bg-[#C9CFEC] relative"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C9CFEC"
                    strokeWidth="2"
                  />
                </svg>
                <div className="h-0.5 flex-1 bg-[#C9CFEC] relative"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C9CFEC"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Active Progress Overlay */}
              <div className="w-[65px] h-5 flex-shrink-0 absolute left-0 top-0 overflow-hidden">
                <div className="flex w-[449px] items-center absolute left-0 top-0 h-5">
                  {/* First circle with checkmark */}
                  <div className="w-5 h-5 flex-shrink-0 relative">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="#4F46E5"
                        stroke="#4F46E5"
                        strokeWidth="2"
                      />
                    </svg>
                    <svg
                      className="absolute left-[3px] top-[3px]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.375 3.5L5.25 10.5L2.625 7.875"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-0.5 flex-1 bg-studevo-purple relative"></div>
                  <div className="w-5 h-5 flex-shrink-0 relative"></div>
                  <div className="h-0.5 flex-1 bg-studevo-purple relative"></div>
                  <div className="w-5 h-5 flex-shrink-0 relative"></div>
                  <div className="h-0.5 flex-1 bg-studevo-purple relative"></div>
                  <div className="w-5 h-5 flex-shrink-0 relative"></div>
                  <div className="h-0.5 flex-1 bg-studevo-purple relative"></div>
                  <div className="w-5 h-5 flex-shrink-0 relative"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-end items-center gap-2 w-full relative">
          <div className="flex pt-10 flex-col items-start gap-2 w-full relative">
            {/* Title */}
            <div className="flex flex-col items-center w-full relative">
              <div className="w-full text-studevo-navy text-center font-poppins text-2xl font-semibold leading-8 relative">
                {data.title}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col items-center w-full relative">
              <div className="w-full text-studevo-navy-50 text-center font-poppins text-base font-normal leading-6 relative">
                {data.description}
              </div>
            </div>

            {/* Options */}
            <div className="flex pt-6 flex-col items-start gap-4 w-full relative">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onOptionSelect(option.id)}
                  className="flex py-4 px-6 justify-center items-center w-full rounded-lg bg-gray-100 relative hover:bg-gray-200 transition-colors duration-200"
                >
                  <div className="flex-1 text-studevo-navy text-center font-poppins text-lg font-normal leading-7 relative">
                    {option.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSlide;
