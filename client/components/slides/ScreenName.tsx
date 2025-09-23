import React, { useState, useCallback } from 'react';

interface SlideData {
  formType: string;
  buttonText: string;
  title: string;
  placeholder: string;
  skip: boolean;
}

interface ScreenNameObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
}

interface ScreenNameProps {
  slideObject: ScreenNameObject;
  onSubmit: (name: string) => void;
}

const ScreenName: React.FC<ScreenNameProps> = ({ slideObject, onSubmit }) => {
  const { data } = slideObject;
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Name validation - minimum 3 characters
  const nameRegex = /^.{3,}$/;

  const validateName = useCallback((value: string) => {
    const valid = nameRegex.test(value.trim());
    setIsValid(valid);
    return valid;
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleSubmit = () => {
    if (isValid && name.trim()) {
      onSubmit(name.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex w-full max-w-[420px] mx-auto h-[720px] py-[115px] flex-col items-center gap-[289px] bg-white relative">
      <div className="flex w-[420px] max-w-[450px] flex-col items-center gap-[119px] relative">
        {/* Title */}
        <div className="flex w-[420px] h-9 px-[26px] flex-col items-start relative">
          <div className="w-full text-center font-poppins text-[30px] font-bold leading-9 text-[#31345D] relative">
            {data.title}
          </div>
        </div>

        {/* Input */}
        <div className="flex w-[372px] py-[17px] px-[17px] justify-center items-start rounded-lg border border-[#E5E7EB] bg-white relative">
          <div className="flex flex-col items-start flex-1 relative">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              onKeyPress={handleKeyPress}
              placeholder={data.placeholder}
              className="w-full text-[#9CA3AF] font-roboto text-lg font-normal leading-normal bg-transparent border-none outline-none placeholder:text-[#9CA3AF] focus:text-[#31345D]"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex h-[94px] py-[26px] px-4 pb-3 flex-col justify-end items-center w-full relative">
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`flex p-4 justify-center items-center w-full rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-200 ${
            isValid
              ? 'bg-[#4F46E5] text-white hover:bg-opacity-90 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } relative`}
        >
          <div className="flex-1 text-center font-poppins text-base font-bold leading-6 relative">
            {data.buttonText}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScreenName;
