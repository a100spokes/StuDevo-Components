import { useState } from "react";
import LandindSlide from "../components/slides/LandindSlide";
import ScreenInfo from "../components/slides/ScreenInfo";
import QuestionSlide from "../components/slides/QuestionSlide";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState<"landing" | "info" | "question">("landing");

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

  // Sample slideObject for the second slide (ScreenInfo)
  const infoSlideObject = {
    id: "info_founder",
    type: "info",
    funnelType: "studevo",
    template: "ScreenInfo",
    data: {
      buttonText: "CONTINUE",
    },
    image: "/#",
    imageText: "Founder of Studevo",
    title: "More than 760,000",
    description: "people mastered AI with Studevo",
  };

  // Sample slideObject for the third slide (QuestionSlide)
  const questionSlideObject = {
    id: "question_age",
    type: "radio",
    funnelType: "studevo",
    template: "ScreenQuestion",
    data: {
      title: "What is your age?",
      description: "We customize your AI challenge using your answers"
    },
    options: [
      {
        id: "18-24",
        title: "18-24"
      },
      {
        id: "25-34",
        title: "25-34"
      },
      {
        id: "35-44",
        title: "35-44"
      },
      {
        id: "45+",
        title: "45+"
      }
    ],
    section: {
      name: "About You",
      number: 1,
      progressPercent: 25,
      sectionCount: 4
    }
  };

  const handleLandingButtonClick = (buttonText: string) => {
    console.log(`Landing slide button clicked: ${buttonText}`);
    // Both YES and NO buttons navigate to the info slide
    setCurrentSlide("info");
  };

  const handleInfoButtonClick = (buttonText: string) => {
    console.log(`Info slide button clicked: ${buttonText}`);
    // Continue button navigates to the question slide
    setCurrentSlide("question");
  };

  const handleOptionSelect = (optionId: string) => {
    console.log(`Option selected: ${optionId}`);
    // Here you would handle navigation to the next slide
    // For now, just logging the action
  };

  const handleBackToInfo = () => {
    setCurrentSlide("info");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {currentSlide === "landing" && (
        <LandindSlide
          slideObject={landingSlideObject}
          onButtonClick={handleLandingButtonClick}
        />
      )}
      {currentSlide === "info" && (
        <ScreenInfo
          slideObject={infoSlideObject}
          onButtonClick={handleInfoButtonClick}
        />
      )}
      {currentSlide === "question" && (
        <QuestionSlide
          slideObject={questionSlideObject}
          onOptionSelect={handleOptionSelect}
          onBack={handleBackToInfo}
        />
      )}
    </div>
  );
}
