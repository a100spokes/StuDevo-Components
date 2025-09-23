import { useState } from "react";
import LandindSlide from "../components/slides/LandindSlide";
import ScreenInfo from "../components/slides/ScreenInfo";
import QuestionSlide from "../components/slides/QuestionSlide";
import MultiQuestionSlide from "../components/slides/MultiQuestionSlide";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState<
    "landing" | "info" | "question" | "multi"
  >("landing");

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
      description: "We customize your AI challenge using your answers",
    },
    options: [
      {
        id: "18-24",
        title: "18-24",
      },
      {
        id: "25-34",
        title: "25-34",
      },
      {
        id: "35-44",
        title: "35-44",
      },
      {
        id: "45+",
        title: "45+",
      },
    ],
    section: {
      name: "About You",
      number: 1,
      progressPercent: 25,
      sectionCount: 4,
    },
  };

  const handleLandingButtonClick = (buttonText: string) => {
    console.log(`Landing slide button clicked: ${buttonText}`);
    // Both YES and NO buttons navigate to the info slide
    setCurrentSlide("info");
  };

  const handleInfoButtonClick = (buttonText: string) => {
    setCurrentSlide("question");
  };

  const handleOptionSelect = (optionId: string) => {
    setCurrentSlide("multi");
  };

  const handleBackToInfo = () => {
    setCurrentSlide("info");
  };

  const multiQuestionSlideObject = {
    id: "checkbox_tools_already_familiar",
    type: "checkbox",
    funnelType: "studevo",
    template: "MultiQuestionSlide",
    data: {
      buttonText: "NEXT STEP",
      title: "Which AI tools are you already familiar with?",
      subtitle: "Select all that apply",
    },
    options: [
      { id: "new_to_tools", title: "I’m new to AI tools", icon: "/#" },
      { id: "midjourney", title: "MidJourney", icon: "/#" },
      { id: "gemini", title: "Google Gemini", icon: "/#" },
      { id: "otter", title: "Otter", icon: "/#" },
      { id: "aiva", title: "AIVA", icon: "/#" },
      { id: "dalle", title: "DALL·E", icon: "/#" },
      { id: "jasper", title: "Jasper", icon: "/#" },
      { id: "copilot", title: "Copilot", icon: "/#" },
      { id: "openai_playground", title: "OpenAI Playground", icon: "/#" },
    ],
    section: {
      name: "AI experience",
      number: 2,
      progressPercent: 40,
      sectionCount: 4,
    },
  } as const;

  const handleBackToQuestion = () => setCurrentSlide("question");
  const handleMultiNext = (selectedIds: string[]) => {
    console.log("Selected tools:", selectedIds);
    // navigate to next when available
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
      {currentSlide === "multi" && (
        <MultiQuestionSlide
          slideObject={multiQuestionSlideObject}
          onNext={handleMultiNext}
          onBack={handleBackToQuestion}
        />
      )}
    </div>
  );
}
