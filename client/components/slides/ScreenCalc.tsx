import React, { useState, useEffect, useMemo } from "react";

interface Review {
  id: string;
  rating: string;
  title: string;
  review: string;
  subtitle: string;
}

interface SlideData {
  title: string;
  description: string;
  subtitle: string;
}

interface ScreenCalcObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
  reviews: Review[];
}

interface ScreenCalcProps {
  slideObject: ScreenCalcObject;
  onComplete?: () => void;
}

const ScreenCalc: React.FC<ScreenCalcProps> = ({ slideObject, onComplete }) => {
  const { data, reviews } = slideObject;
  const [progress, setProgress] = useState(0);
  // Infinite carousel via clones: [last, ...reviews, first]
  const extendedReviews = useMemo(() => {
    if (reviews.length === 0) return [] as Review[];
    const first = reviews[0];
    const last = reviews[reviews.length - 1];
    return [last, ...reviews, first];
  }, [reviews]);
  const [displayIndex, setDisplayIndex] = useState(1); // start at first real slide
  const [enableTransition, setEnableTransition] = useState(true);

  // Progress animation - starts after 500ms, goes from 0 to 100 non-linearly
  useEffect(() => {
    const startDelay = setTimeout(() => {
      const duration = 3000; // 3 seconds for full animation
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Non-linear easing (ease-out curve)
        const eased = 1 - Math.pow(1 - progress, 3);
        const percentage = Math.floor(eased * 100);

        setProgress(percentage);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  // Review carousel - auto-cycle every 4 seconds forward only
  useEffect(() => {
    if (extendedReviews.length <= 1) return;
    const interval = setInterval(() => {
      setEnableTransition(true);
      setDisplayIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [extendedReviews.length]);

  // Calculate stroke dash offset for circular progress
  const circumference = 2 * Math.PI * 72; // radius = 72 (144/2 - 8 for stroke width)
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] pb-[172px] flex-col items-center bg-gradient-to-b from-gray-50 to-gray-50 relative">
      <div className="flex h-[720px] max-w-[450px] flex-col justify-center items-start flex-shrink-0 w-full relative">
        <div className="h-[644px] flex-shrink-0 w-full relative">
          {/* Progress Circle */}
          <div className="flex w-40 h-40 flex-col justify-center items-start flex-shrink-0 absolute left-[130px] top-12">
            <div className="flex-1 w-full relative">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
              >
                {/* Background circle */}
                <path
                  d="M80 152C119.765 152 152 119.765 152 80C152 40.2355 119.765 8 80 8C40.2355 8 8 40.2355 8 80C8 119.765 40.2355 152 80 152Z"
                  stroke="#E5E7EB"
                  strokeWidth="16"
                />
                {/* Progress circle */}
                <path
                  d="M80 152C119.765 152 152 119.765 152 80C152 40.2355 119.765 8 80 8C40.2355 8 8 40.2355 8 80C8 119.765 40.2355 152 80 152Z"
                  stroke="#4F46E5"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 80 80)"
                  style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
                />
              </svg>
              <div className="flex w-40 h-40 justify-center items-center absolute inset-0">
                <div className="flex flex-col items-center">
                  <div className="text-gray-800 text-center font-poppins text-[30px] font-bold leading-9">
                    {progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="flex w-[372px] flex-col items-center absolute left-6 top-[232px] h-6">
            <div className="text-gray-600 text-center font-poppins text-base font-normal leading-6">
              {data.subtitle}
            </div>
          </div>

          {/* Main Title */}
          <div className="flex w-[372px] flex-col items-center absolute left-6 top-[304px] h-10">
            <div className="text-studevo-purple text-center font-poppins text-4xl font-bold leading-10">
              {data.title}
            </div>
          </div>

          {/* Description */}
          <div className="flex w-[372px] flex-col items-center absolute left-6 top-[359px] h-7">
            <div className="text-gray-600 text-center font-poppins text-lg font-normal leading-7">
              {data.description}
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="w-[372px] absolute left-6 top-[417px] h-[194px] overflow-hidden">
            <div
              className={`flex ${enableTransition ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${displayIndex * 100}%)` }}
              onTransitionEnd={() => {
                if (displayIndex === extendedReviews.length - 1) {
                  // Jump from cloned last to first real slide without reversing direction
                  setEnableTransition(false);
                  setDisplayIndex(1);
                }
              }}
            >
              {extendedReviews.map((review, idx) => (
                <div key={`${review.id}-${idx}`} className="min-w-full px-2">
                  <div className="w-full h-[194px] p-6 flex flex-col items-start gap-2 rounded-xl bg-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                    {/* Stars */}
                    <div className="flex items-center w-full">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex flex-col items-start">
                          <div className="text-studevo-emerald font-['Material_Icons'] text-2xl font-normal leading-6">
                            star
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Content */}
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="flex flex-col items-start flex-1">
                          <div className="text-[#31345D] font-poppins text-base font-semibold leading-6">
                            {review.title}
                          </div>
                        </div>
                        <div className="flex pl-4 flex-col items-start">
                          <div className="text-gray-600 font-poppins text-sm font-normal leading-5">
                            {review.subtitle}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <div className="w-full text-gray-600 font-poppins text-sm font-normal leading-5">
                          {review.review}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCalc;
