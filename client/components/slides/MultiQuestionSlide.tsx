import React, { useMemo, useState } from "react";

interface Option {
  id: string;
  title: string;
  icon?: string;
}

interface SlideData {
  buttonText: string;
  title: string;
  subtitle: string;
}

interface Section {
  name: string;
  number: number;
  progressPercent: number; // 0..100
  sectionCount: number;
}

interface MultiQuestionSlideObject {
  id: string;
  type: string; // "checkbox"
  funnelType: string;
  template: string; // "MultiQuestionSlide"
  data: SlideData;
  options: Option[];
  section: Section;
}

interface MultiQuestionSlideProps {
  slideObject: MultiQuestionSlideObject;
  onNext: (selectedIds: string[]) => void;
  onBack: () => void;
}

const ProgressBar: React.FC<{ percent: number }> = ({ percent }) => {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="w-[380px] h-5 relative">
      {/* Background (4 steps skeleton like in design) */}
      <div className="flex w-[380px] items-center absolute inset-0 h-5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="#C9CFEC" strokeWidth="2" />
        </svg>
        <div className="h-0.5 flex-1 bg-[#C9CFEC]" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="#C9CFEC" strokeWidth="2" />
        </svg>
        <div className="h-0.5 flex-1 bg-[#C9CFEC]" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="#C9CFEC" strokeWidth="2" />
        </svg>
        <div className="h-0.5 flex-1 bg-[#C9CFEC]" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="#C9CFEC" strokeWidth="2" />
        </svg>
      </div>
      {/* Active overlay bar (smooth percent fill) */}
      <div
        className="absolute left-0 top-[9px] h-0.5 bg-studevo-purple rounded"
        style={{ width: `${clamped}%` }}
      />
      {/* Active first-circle check when percent>0 */}
      {clamped > 0 && (
        <div className="absolute left-0 top-0 w-5 h-5">
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
      )}
    </div>
  );
};

const MultiQuestionSlide: React.FC<MultiQuestionSlideProps> = ({
  slideObject,
  onNext,
  onBack,
}) => {
  const { data, options, section } = slideObject;
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const canContinue = selected.length > 0;

  const optionButtonClasses = (active: boolean) =>
    `flex py-4 px-6 justify-center items-center w-full rounded-lg transition-colors duration-200 border ${
      active
        ? "bg-studevo-purple text-white border-studevo-purple"
        : "bg-gray-100 text-studevo-navy border-transparent hover:bg-gray-200"
    }`;

  const percent = useMemo(
    () => section.progressPercent,
    [section.progressPercent],
  );

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] pt-5 px-5 pb-0 flex-col items-center bg-white relative">
      <div className="flex max-w-[450px] flex-col items-center w-full relative">
        {/* Header */}
        <div className="flex h-[67px] justify-center items-center w-full relative">
          <div className="flex flex-col items-center gap-[15px] flex-1 relative">
            <div className="flex px-[20px] pr-[9px] justify-between items-center w-full relative">
              <button
                onClick={onBack}
                className="w-8 h-8 relative"
                aria-label="Back"
              >
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
              <div className="text-studevo-purple text-center font-roboto text-base leading-normal">
                {section.name}
              </div>
              <div className="text-transparent text-right font-montserrat text-xs leading-normal">
                0/0
              </div>
            </div>
            <ProgressBar percent={percent} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-end items-center gap-2 w-full relative">
          <div className="flex pt-10 flex-col items-start gap-2 w-full relative">
            <div className="flex flex-col items-center w-full">
              <div className="w-full text-studevo-navy text-center font-poppins text-2xl font-semibold leading-8">
                {data.title}
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="w-full text-studevo-navy-50 text-center font-poppins text-base leading-6">
                {data.subtitle}
              </div>
            </div>
            <div className="flex pt-6 flex-col items-start gap-4 w-full">
              {options.map((opt) => {
                const active = selected.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggle(opt.id)}
                    className={optionButtonClasses(active)}
                  >
                    <div className="flex-1 text-center font-poppins text-lg leading-7">
                      {opt.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer button */}
        <div className="flex p-4 flex-col items-start w-full">
          <button
            disabled={!canContinue}
            onClick={() => onNext(selected)}
            className={`flex p-4 justify-center items-center w-full rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-200 ${
              canContinue
                ? "bg-studevo-purple text-white hover:bg-opacity-90"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <div className="flex-1 text-center font-poppins text-base font-bold leading-6">
              {data.buttonText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiQuestionSlide;
