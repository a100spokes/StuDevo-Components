import { useState } from "react";
import LandindSlide from "../components/slides/LandindSlide";
import ScreenInfo from "../components/slides/ScreenInfo";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState<'landing' | 'question'>('landing');

  // Sample slideObject for the first slide
  const landingSlideObject = {
    id: "start",
    type: "info",
    funnelType: "studevo",
    template: "LandingSlide",
    data: {
      heroImage: "/#",
      heroImageAlt: "28-DAY AI CHALLENGE",
      title: "28-DAY AI CHALLENGE",
      description: "HAVE YOU EVER USED AI?",
      buttonText_1: "YES",
      buttonText_2: "NO",
      buttonPulse: false,
      branding: {
        copyright: "Studevo Limited. Limassol, Cyprus",
        headerBlocks: [
          {
            title: "760K+ USERS' CHOICE",
            description: "Learned new skills",
            icon: "/#",
          },
          {
            title: "RATED ON TRUSTPILOT",
            description: "4.5 Satisfaction Score",
            icon: "/#",
          },
        ],
        footerLinks: [
          {
            label: "Terms and Conditions",
            href: "/#",
          },
          {
            label: "Privacy Policy",
            href: "/#",
          },
          {
            label: "Subscription Terms",
            href: "/#",
          },
        ],
      },
    },
  };

  // Sample slideObject for the second slide
  const questionSlideObject = {
    id: "info_founder",
    type: "info",
    funnelType: "studevo",
    template: "ScreenInfo",
    data: {
      buttonText: "CONTINUE"
    },
    image: "/#",
    imageText: "Founder of Studevo",
    title: "More than 760,000",
    description: "people mastered AI with Studevo"
  };

  const handleLandingButtonClick = (buttonText: string) => {
    console.log(`Landing slide button clicked: ${buttonText}`);
    // Both YES and NO buttons navigate to the question slide
    setCurrentSlide('question');
  };

  const handleQuestionButtonClick = (buttonText: string) => {
    console.log(`Question slide button clicked: ${buttonText}`);
    // Here you would handle navigation to the next slide
    // For now, just logging the action
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {currentSlide === 'landing' ? (
        <LandindSlide
          slideObject={landingSlideObject}
          onButtonClick={handleLandingButtonClick}
        />
      ) : (
        <ScreenInfo
          slideObject={questionSlideObject}
          onButtonClick={handleQuestionButtonClick}
        />
      )}
    </div>
  );
}
