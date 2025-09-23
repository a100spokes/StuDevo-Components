import React, { useState, useCallback } from 'react';

interface SlideData {
  formType: string;
  buttonText: string;
  title: string;
  description: string;
  placeholder: string;
  skip: boolean;
}

interface ScreenEmailObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
}

interface ScreenEmailProps {
  slideObject: ScreenEmailObject;
  onSubmit: (email: string) => void;
}

const ScreenEmail: React.FC<ScreenEmailProps> = ({ slideObject, onSubmit }) => {
  const { data } = slideObject;
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = useCallback((value: string) => {
    const valid = emailRegex.test(value.trim());
    setIsValid(valid);
    return valid;
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = () => {
    if (isValid && email.trim()) {
      onSubmit(email.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Parse title to highlight "Personal AI-Powered Income Growth" in purple
  const renderTitle = () => {
    const parts = data.title.split('Personal AI-Powered Income Growth');
    if (parts.length === 2) {
      return (
        <>
          <span className="text-[#31345D]">{parts[0]}</span>
          <span className="text-studevo-purple">Personal AI-Powered Income Growth</span>
          <span className="text-[#31345D]">{parts[1]}</span>
        </>
      );
    }
    return <span className="text-[#31345D]">{data.title}</span>;
  };

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] py-[55px] flex-col items-center gap-[107px] bg-white relative">
      <div className="flex max-w-[450px] px-5 flex-col items-center gap-[107px] w-full relative">
        
        {/* Title */}
        <div className="flex px-[26px] flex-col items-center w-full relative">
          <div className="w-full text-center font-poppins text-[30px] font-bold leading-9 relative">
            {renderTitle()}
          </div>
        </div>

        {/* Form Container */}
        <div className="flex flex-col items-center gap-[107px] w-full relative">
          
          {/* Email Input */}
          <div className="flex py-[17px] px-[17px] justify-center items-start w-full rounded-lg border border-gray-300 bg-white relative">
            <div className="flex flex-col items-start flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                placeholder={data.placeholder}
                className="w-full text-gray-400 font-roboto text-lg font-normal leading-normal bg-transparent border-none outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="flex p-4 items-center w-full rounded-lg bg-gray-100 relative">
            <div className="flex pt-1 pr-3 pb-0 pl-0 flex-col justify-center items-start relative">
              <div className="text-gray-400 font-['Material_Icons'] text-2xl font-normal leading-6">
                lock
              </div>
            </div>
            <div className="flex flex-col justify-center items-start relative">
              <div className="w-[311px] text-gray-600 font-roboto text-xs font-normal leading-5 relative">
                {data.description}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`flex p-4 justify-center items-center w-full rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-200 ${
              isValid
                ? 'bg-studevo-purple text-white hover:bg-opacity-90 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } relative`}
          >
            <div className="flex-1 text-center font-poppins text-base font-bold leading-6 relative">
              {data.buttonText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenEmail;
