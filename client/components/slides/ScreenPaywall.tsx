import React, { useState, useEffect } from 'react';

interface TariffOption {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  newPrice: string;
  isDefault: boolean;
  currency: string;
  value: number;
}

interface TabData {
  title: string;
  image: string;
  sectionColor: string;
  sectionText_1: string;
  sectionProgress_1: string;
  sectionText_2: string;
  sectionProgress_2: string;
}

interface Review {
  id: string;
  rating: string;
  review: string;
  subtitle: string;
}

interface SlideData {
  buttonText: string;
  resultsSection: {
    subtitle: string;
    tabs: TabData[];
  };
  readinessSection: {
    title: string;
    subtitle: string;
    icon: string;
  };
  graphSection: {
    title: string;
    image: string;
  };
  youWillSection: {
    title: string;
    text: Array<{[key: string]: string}>;
    image: string;
  };
  tariffSection: {
    title: string;
    subtitle: string;
    description: string;
    subtariff: {
      text: string;
      icon: string;
    };
    paysystem: Array<{icon: string}>;
    options: TariffOption[];
  };
  guaranteeSection: {
    title: string;
    description: string;
    image: string;
  };
  benefitsSection: {
    title: string;
    list: Array<{text: string}>;
  };
  reviewSection: {
    title: string;
    reviews: Review[];
  };
}

interface ScreenPaywallObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
}

interface ScreenPaywallProps {
  slideObject: ScreenPaywallObject;
  onSubmit: (selectedPlan: TariffOption) => void;
}

const ScreenPaywall: React.FC<ScreenPaywallProps> = ({ slideObject, onSubmit }) => {
  const { data } = slideObject;
  const [timeLeft, setTimeLeft] = useState(449); // 7:29 = 449 seconds
  const [selectedPlan, setSelectedPlan] = useState<TariffOption>(
    data.tariffSection.options.find(option => option.isDefault) || data.tariffSection.options[0]
  );

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlanSelect = (plan: TariffOption) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = () => {
    onSubmit(selectedPlan);
  };

  const getProgressWidth = (percentage: string) => {
    const num = parseInt(percentage.replace('%', ''));
    return (num / 100) * 100;
  };

  return (
    <div className="flex w-full max-w-[420px] mx-auto min-h-[884px] flex-col items-center bg-white relative">
      <div className="flex max-w-[450px] flex-col items-center w-full bg-white relative">
        
        {/* Header with Timer */}
        <div className="flex h-32 p-4 flex-col justify-center items-center w-full relative">
          <div className="flex w-full max-w-[388px] p-4 flex-col justify-center items-end gap-2 rounded-lg bg-blue-50 relative">
            <div className="flex flex-col items-start w-full relative">
              <div className="w-full text-blue-700 font-roboto text-sm font-normal leading-5 relative">
                Your results and personalized plan are saved for you for the next 10 minutes.
              </div>
            </div>
            <div className="flex items-center gap-2 w-full relative">
              <div className="flex-1 text-blue-700 font-roboto text-[32px] font-normal leading-5 relative">
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={handleSubmit}
                className="flex w-[119px] h-[45px] py-2 px-0 flex-col justify-center items-center rounded-lg bg-[#4F46E5] relative"
              >
                <div className="text-white text-center font-roboto text-sm font-bold leading-7 relative">
                  Get my plan
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Results Comparison Section */}
        <div className="flex p-4 flex-col items-start gap-3 w-full relative">
          <div className="flex justify-center items-start gap-4 w-full relative">
            {data.resultsSection.tabs.map((tab, index) => (
              <div key={index} className="w-[168px] relative">
                {/* Tab Title */}
                <div className="flex w-[168px] flex-col items-center h-6 relative">
                  <div className="text-gray-500 text-center font-roboto text-base font-bold leading-6 relative">
                    {tab.title}
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex w-[168px] flex-col items-start mt-2 mb-4 relative">
                  <div className="w-[168px] h-[168px] rounded-lg bg-gray-200 relative overflow-hidden">
                    {index === 0 ? (
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/e467e714e8a1fd00f9623ad179dc20f5e841bbf0?width=336" 
                        alt="Current state" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/52a31e912830d0bacbf73872076bb9d8722d817a?width=336" 
                        alt="Goal state" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                    {index === 0 && (
                      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                    )}
                  </div>
                </div>

                {/* Progress Sections */}
                <div className="flex w-[168px] flex-col items-start gap-2 relative">
                  {/* AI Skills Progress */}
                  <div className="flex flex-col items-start w-full relative">
                    <div className="flex justify-between items-start w-full relative">
                      <div className="flex flex-col items-center w-full relative">
                        <div className="text-black text-center font-roboto text-sm font-normal leading-5 relative">
                          {tab.sectionText_1}
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full relative">
                        <div 
                          className="text-center font-roboto text-sm font-bold leading-5 relative"
                          style={{ color: tab.sectionColor }}
                        >
                          {tab.sectionProgress_1}
                        </div>
                      </div>
                    </div>
                    <div className="h-[10px] w-full bg-gray-200 rounded-full relative">
                      <div 
                        className="h-[10px] rounded-full relative"
                        style={{ 
                          backgroundColor: tab.sectionColor,
                          width: `${getProgressWidth(tab.sectionProgress_1)}%`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Income Potential Progress */}
                  <div className="flex flex-col items-start w-full relative">
                    <div className="flex justify-between items-start w-full relative">
                      <div className="flex flex-col items-center w-full relative">
                        <div className="text-black text-center font-roboto text-sm font-normal leading-5 relative">
                          {tab.sectionText_2}
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full relative">
                        <div 
                          className="text-center font-roboto text-sm font-bold leading-5 relative"
                          style={{ color: tab.sectionColor }}
                        >
                          {tab.sectionProgress_2}
                        </div>
                      </div>
                    </div>
                    <div className="h-[10px] w-full bg-gray-200 rounded-full relative">
                      <div 
                        className="h-[10px] rounded-full relative"
                        style={{ 
                          backgroundColor: tab.sectionColor,
                          width: `${getProgressWidth(tab.sectionProgress_2)}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Results Disclaimer */}
          <div className="flex pb-4 pl-4 pr-0 flex-col items-center w-full relative">
            <div className="w-full text-gray-400 font-roboto text-xs font-normal leading-4 relative">
              {data.resultsSection.subtitle}
            </div>
          </div>
        </div>

        {/* Readiness Section */}
        <div className="flex flex-col items-start gap-6 w-full px-4 relative">
          <div className="flex p-4 justify-between items-center w-full rounded-lg border border-yellow-300 bg-yellow-100 relative">
            <div className="flex min-w-[294px] flex-col items-start relative">
              <div className="flex flex-col items-start w-full relative">
                <div className="text-black font-roboto text-base font-bold leading-6 relative">
                  {data.readinessSection.title}
                </div>
              </div>
              <div className="flex flex-col items-start w-full relative">
                <div className="text-black font-roboto text-sm font-normal leading-5">
                  <span className="text-[#4F46E5]">4-week</span> program is enough for you to achieve your goal!
                </div>
              </div>
            </div>
            <svg className="w-[43px] h-[43px] relative" width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.7376 9.47452C24.3831 7.12005 20.3739 8.06648 19.321 11.2253L18.1266 14.8082L14.8791 18.4166H12.5417C11.5522 18.4166 10.75 19.2188 10.75 20.2083V36.3333C10.75 37.3228 11.5522 38.125 12.5417 38.125H30.9899C33.0894 38.125 34.907 36.6667 35.3625 34.6174L37.5091 24.9577C38.2551 21.6008 35.7007 18.4166 32.2622 18.4166H27.3168L28.304 13.9746C28.6362 12.4796 28.1817 10.9186 27.0988 9.83568L26.7376 9.47452Z" fill="#10B981"/>
              <path d="M6.27018 18.4166C5.28068 18.4166 4.47852 19.2188 4.47852 20.2084V36.3334C4.47852 37.3227 5.28068 38.125 6.27018 38.125H12.541C13.5305 38.125 14.3327 37.3227 14.3327 36.3334V20.2084C14.3327 19.2188 13.5305 18.4166 12.541 18.4166H6.27018Z" fill="#5753FE"/>
            </svg>
          </div>

          {/* Graph Section */}
          <div className="flex h-[377px] p-6 pb-6 flex-col items-start gap-4 w-full rounded-lg bg-[#EAE7FF] relative">
            <div className="flex flex-col items-center w-full relative">
              <div className="w-full text-black text-center font-roboto text-2xl font-bold leading-8 relative">
                {data.graphSection.title}
              </div>
            </div>
            <div className="flex justify-center items-center w-full relative">
              <img 
                className="h-[304px] max-w-[304px] flex-1 object-contain relative" 
                src="https://api.builder.io/api/v1/image/assets/TEMP/be49ce657d709752d53209b945048c7586157ac2?width=608" 
                alt="AI learning timeline"
              />
            </div>
          </div>
        </div>

        {/* Try Studevo Section */}
        <div className="flex h-[1212px] flex-col items-start gap-[-7px] w-full relative">
          <div className="flex pt-4 flex-col items-start gap-4 w-full px-4 relative">
            <div className="flex flex-col items-center w-full relative">
              <div className="w-full text-black text-center font-roboto text-2xl font-bold leading-8 relative">
                {data.youWillSection.title}
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 w-full relative">
              {data.youWillSection.text.map((item, index) => (
                <div key={index} className="flex items-center w-full relative">
                  <div className="flex pr-2 flex-col items-start relative">
                    <div className="text-transparent font-material-icons text-2xl font-normal leading-6 relative">
                      check_circle
                    </div>
                  </div>
                  <div className="flex w-[356px] flex-col items-start relative">
                    <div className="w-full text-black font-roboto text-base font-normal leading-6 relative">
                      {Object.values(item)[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App Screenshots */}
          <div className="flex flex-col items-start gap-11 w-full px-4 relative">
            <div className="flex pt-6 flex-col items-start gap-4 w-full relative">
              <div className="flex justify-center items-start w-full relative">
                <img 
                  className="max-w-[352px] flex-1 h-auto rounded-[10px] relative" 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/de6cd86374d60e7855d245fdbe738f0968bda232?width=704" 
                  alt="Learning modules collage"
                />
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-center gap-1 w-full relative">
              <div className="flex flex-col items-start gap-4 w-full relative">
                <div className="flex w-[388px] flex-col items-center relative">
                  <div className="text-black text-center font-roboto text-2xl font-bold leading-8 relative">
                    {data.tariffSection.title}
                  </div>
                </div>
                <div className="flex w-[388px] p-2 flex-col items-center rounded-lg bg-green-200 relative">
                  <div className="text-green-800 text-center font-roboto text-sm font-bold leading-5 relative">
                    {data.tariffSection.subtitle}
                  </div>
                </div>

                {/* Pricing Options */}
                <div className="flex w-[388px] flex-col items-start gap-4 relative">
                  {data.tariffSection.options.map((option) => (
                    <div 
                      key={option.id}
                      onClick={() => handlePlanSelect(option)}
                      className={`flex p-3 items-center gap-3 w-full rounded-[10px] cursor-pointer transition-all ${
                        selectedPlan.id === option.id 
                          ? 'border-2 border-[#4F46E5] bg-[#EAE7FF]' 
                          : 'bg-white shadow-sm border border-gray-100'
                      } relative`}
                    >
                      <div className="flex flex-col items-start relative">
                        <div className={`font-material-icons text-2xl font-normal leading-6 relative ${
                          selectedPlan.id === option.id ? 'text-[#4F46E5]' : 'text-gray-400'
                        }`}>
                          {selectedPlan.id === option.id ? 'radio_button_checked' : 'radio_button_unchecked'}
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-2 flex-1 relative">
                        <div className="w-full text-[#31345D] font-open-sans text-lg font-normal leading-[14px] relative">
                          {option.title}
                        </div>
                        <div className="flex w-[61.592px] items-center gap-2 relative">
                          <div className="text-gray-400 font-open-sans text-[10px] font-normal leading-[10px] line-through relative">
                            {option.oldPrice}
                          </div>
                          <div className="text-gray-400 font-open-sans text-[10px] font-normal leading-[10px] relative">
                            {option.newPrice}
                          </div>
                        </div>
                      </div>
                      <div className={`flex h-[46px] p-2 items-start gap-1 rounded-[10px] relative ${
                        selectedPlan.id === option.id ? 'bg-[#4F46E5]' : 'bg-[#EAE7FF]'
                      }`}>
                        <div className={`text-right font-open-sans text-xs font-bold leading-3 relative ${
                          selectedPlan.id === option.id ? 'text-white' : 'text-[#31345D]'
                        }`}>
                          $
                        </div>
                        <div className={`text-right font-open-sans text-[35px] font-bold leading-[25px] relative ${
                          selectedPlan.id === option.id ? 'text-white' : 'text-[#31345D]'
                        }`}>
                          {option.price.split('$')[1].split('.')[0]}
                        </div>
                        <div className="flex w-[37px] flex-col items-start gap-1 relative">
                          <div className={`w-full font-open-sans text-xs font-bold leading-3 relative ${
                            selectedPlan.id === option.id ? 'text-white' : 'text-[#31345D]'
                          }`}>
                            {option.price.split('.')[1]}
                          </div>
                          <div className={`w-full font-open-sans text-[10px] font-normal leading-3 relative ${
                            selectedPlan.id === option.id ? 'text-white/70' : 'text-[#31345D]/70'
                          }`}>
                            per Day
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Additional Info */}
                  <div className="w-[388px] h-11 relative">
                    <div className="flex w-6 h-6 flex-col justify-center flex-shrink-0 text-gray-600 text-center font-material-icons text-2xl font-normal leading-6 absolute left-7 top-0">
                      people
                    </div>
                    <div className="flex w-[308px] h-5 flex-col justify-center flex-shrink-0 text-gray-600 text-center font-roboto text-sm font-normal leading-5 absolute left-13 top-0.5">
                      People using plan for 4 months achieve twice the
                    </div>
                    <div className="flex w-[215px] h-5 flex-col justify-center flex-shrink-0 text-gray-600 text-center font-roboto text-sm font-normal leading-5 absolute left-[87px] top-6">
                      results as people on 1-month plan.
                    </div>
                  </div>

                  {/* Get Plan Button */}
                  <button
                    onClick={handleSubmit}
                    className="flex w-[388px] py-3 px-0 justify-center items-center rounded-[10px] bg-[#4F46E5] relative"
                  >
                    <div className="text-white text-center font-roboto text-base font-bold leading-6 relative">
                      {data.buttonText}
                    </div>
                  </button>
                </div>

                {/* Terms */}
                <div className="flex w-[388px] h-18 pb-2 flex-col items-center relative">
                  <div className="text-gray-400 text-center font-roboto text-xs font-normal leading-4 relative">
                    {data.tariffSection.description}
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="flex py-0 px-[74px] justify-center items-end gap-6 w-full relative">
                <svg className="w-11 h-11 relative" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6062 25.3679C24.2018 25.3679 23.4318 25.1754 22.2493 24.6895L21.8112 24.4897L21.3143 27.3772C22.1687 27.7292 23.7087 28.0317 25.3018 28.0555C29.0437 28.0555 31.4893 26.3194 31.5187 23.6482C31.548 22.1797 30.5837 21.065 28.5468 20.1465C27.3112 19.5507 26.5412 19.151 26.5412 18.546C26.5412 18.0107 27.1993 17.4405 28.5743 17.4405C29.488 17.4186 30.3964 17.5865 31.2418 17.9337L31.5718 18.0804L32.0687 15.29L31.9825 15.3084C30.9594 14.9411 29.8795 14.7568 28.7925 14.7639C25.2725 14.7639 22.7883 16.5129 22.77 19.019C22.748 20.8615 24.5373 21.8992 25.8885 22.517C27.2763 23.1495 27.7402 23.5474 27.7365 24.1157C27.7273 24.9792 26.6273 25.3679 25.6062 25.3679ZM41.118 15.0004H38.368C37.5118 15.0004 36.872 15.2295 36.4962 16.0692L31.207 27.8759H34.9488L35.6968 25.9435L40.2618 25.9472C40.3737 26.3982 40.7018 27.8759 40.7018 27.8759H44L41.118 15.0004ZM36.7217 23.3017L38.1407 19.7029C38.1223 19.7395 38.434 18.9585 38.6137 18.4745L38.8575 19.5855L39.6807 23.3017H36.7217ZM15.4807 27.7732H19.0447L21.2722 14.8922H17.71V14.8885L15.4807 27.7732ZM9.0255 23.7802L8.65517 21.9909V21.9964L7.40483 16.082C7.19033 15.2625 6.56333 15.0205 5.786 14.9912H0.0458333L0 15.2625C1.2925 15.565 2.45667 16.0032 3.498 16.5404C3.6597 16.6349 3.77811 16.7888 3.828 16.9694L6.908 27.8575H10.6737L16.2855 15.0004H12.5107L9.0255 23.7802Z" fill="#191E6E"/>
                </svg>
                {/* Add other payment method icons here */}
              </div>
            </div>
          </div>
        </div>

        {/* Money-Back Guarantee */}
        <div className="h-[284px] w-full rounded-lg bg-green-50 relative px-6 py-6">
          <div className="flex w-6 h-6 flex-col justify-center flex-shrink-0 text-green-500 text-center font-material-icons text-2xl font-normal leading-6 absolute left-[182px] top-6">
            verified_user
          </div>
          <div className="flex w-[340px] flex-col items-center absolute left-6 top-16 h-7">
            <div className="text-black text-center font-roboto text-xl font-bold leading-7 relative">
              {data.guaranteeSection.title}
            </div>
          </div>
          <div className="flex w-[340px] flex-col items-center absolute left-6 top-[100px] h-40">
            <div className="flex h-40 flex-col justify-center w-full text-gray-600 text-center font-roboto text-sm font-normal leading-5 relative">
              {data.guaranteeSection.description}
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="flex pt-6 flex-col items-start gap-4 w-full px-4 relative">
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full text-black text-center font-roboto text-2xl font-bold leading-8 relative">
              {data.benefitsSection.title}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 w-full relative">
            {data.benefitsSection.list.map((benefit, index) => (
              <div key={index} className="flex items-center w-full relative">
                <div className="flex pr-2 flex-col items-start relative">
                  <div className="text-blue-500 font-material-icons text-2xl font-normal leading-6 relative">
                    check_circle
                  </div>
                </div>
                <div className="flex flex-col items-start relative">
                  <div className="text-black font-roboto text-base font-normal leading-6 relative">
                    {benefit.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex pt-6 flex-col items-start gap-6 w-full px-4 relative">
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full text-black text-center font-roboto text-2xl font-bold leading-8 relative">
              {data.reviewSection.title}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 w-full relative">
            {data.reviewSection.reviews.map((review) => (
              <div key={review.id} className="flex p-4 flex-col items-start gap-2 w-full rounded-lg bg-gray-100 relative">
                <div className="flex flex-col items-start w-full relative">
                  <div className="w-full text-black font-roboto text-sm font-normal leading-5 relative">
                    {review.review}
                  </div>
                </div>
                <div className="flex items-center gap-0 w-full relative">
                  <div className="flex items-start relative">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex flex-col items-start relative">
                        <div className="text-yellow-400 font-material-icons text-2xl font-normal leading-6 relative">
                          star
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex min-w-[86.2px] pl-28 flex-col items-end flex-1 relative">
                    <div className="flex flex-col items-start relative">
                      <div className="text-gray-500 font-roboto text-xs font-normal leading-4 relative">
                        {review.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-8"></div> {/* Bottom spacing */}
      </div>
    </div>
  );
};

export default ScreenPaywall;
