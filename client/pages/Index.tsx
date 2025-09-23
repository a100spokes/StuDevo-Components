import { useState } from "react";
import LandindSlide from "../components/slides/LandindSlide";
import ScreenInfo from "../components/slides/ScreenInfo";
import QuestionSlide from "../components/slides/QuestionSlide";
import MultiQuestionSlide from "../components/slides/MultiQuestionSlide";
import ScreenStats from "../components/slides/ScreenStats";
import ScreenCalc from "../components/slides/ScreenCalc";
import ScreenEmail from "../components/slides/ScreenEmail";
import ScreenName from "../components/slides/ScreenName";
import ScreenPaywall from "../components/slides/ScreenPaywall";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState<
    | "landing"
    | "info"
    | "question"
    | "multi"
    | "stats"
    | "calc"
    | "email"
    | "name"
    | "paywall"
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

  const screenStatsObject = {
    id: "info_stats",
    type: "info",
    funnelType: "studevo",
    template: "ScreenStats",
    data: {
      image: "/#",
      buttonText: "CONTINUE",
      title: "Your Personal AI-Powered Income Growth",
      description:
        "From your responses, we've mapped out a path to help you master the skills needed to become an AI Expert by Nov 2025.",
    },
  };

  const handleBackToQuestion = () => setCurrentSlide("question");
  const handleBackToMulti = () => setCurrentSlide("multi");
  const handleMultiNext = (selectedIds: string[]) => {
    console.log("Selected tools:", selectedIds);
    setCurrentSlide("stats");
  };
  const handleStatsNext = (buttonText: string) => {
    setCurrentSlide("calc");
  };

  const screenCalcObject = {
    id: "calculations_screen",
    type: "calculations",
    funnelType: "studevo",
    template: "ScreenCalc",
    data: {
      title: "750,000+ people",
      description: "have chosen Studevo",
      subtitle: "Creating your personal challenge...",
    },
    reviews: [
      {
        id: "review_1",
        rating: "5.0",
        title: "Deliver real results at work",
        review:
          "The AI insights I've gained through the program were instantly applicable in my role. The new skills have boosted both my productivity and overall impact at work.",
        subtitle: "Tina",
      },
      {
        id: "review_2",
        rating: "5.0",
        title: "Simple for everyone",
        review:
          "Studevo empowers learners of every skill level to grasp complex AI concepts with ease. The platform turns challenging theories into practical skills that can be applied right away.",
        subtitle: "Thomas",
      },
      {
        id: "review_3",
        rating: "5.0",
        title: "Confidence With AI",
        review:
          "I've gained the confidence to tackle AI projects I once thought were out of reach. The platform's clear explanations and hands-on approach made learning practical.",
        subtitle: "Jessica",
      },
    ],
  };

  const screenEmailObject = {
    id: "email_screen",
    type: "form",
    funnelType: "studevo",
    template: "ScreenEmail",
    data: {
      formType: "email",
      buttonText: "CONTINUE",
      title:
        "Enter your email to unlock your Personal AI-Powered Income Growth Challenge",
      description:
        "We value your privacy. Your data is safe and processed according to our Privacy Policy.",
      placeholder: "Enter your email",
      skip: false,
    },
  };

  const screenNameObject = {
    id: "name_screen",
    type: "form",
    funnelType: "studevo",
    template: "ScreenName",
    data: {
      formType: "text",
      buttonText: "CONTINUE",
      title: "What is your name?",
      placeholder: "Enter your name",
      skip: false,
    },
  };

  const screenPaywallObject = {
    id: "paywall",
    type: "paywall",
    funnelType: "studevo",
    template: "ScreenPaywall",
    data: {
      buttonText: "Get My Plan Now",
      resultsSection: {
        subtitle: "This is not a guarantee or promise of results.",
        tabs: [
          {
            title: "Now",
            image: "/#",
            sectionColor: "#9CA3AF",
            sectionText_1: "AI skills",
            sectionProgress_1: "45%",
            sectionText_2: "Income Potential",
            sectionProgress_2: "50%"
          },
          {
            title: "Goal",
            image: "/#",
            sectionColor: "#10B981",
            sectionText_1: "AI skills",
            sectionProgress_1: "96%",
            sectionText_2: "Income Potential",
            sectionProgress_2: "94%"
          }
        ]
      },
      readinessSection: {
        title: "Your readiness: 4.5/5",
        subtitle: "4-week program is enough for you to achieve your goal!",
        icon: "/#"
      },
      graphSection: {
        title: "AI is easier than you think",
        image: "/#"
      },
      youWillSection: {
        title: "Try Studevo and you will:",
        text: [
          {
            text_1: "✅ Learn to use AI to make more money"
          },
          {
            text_2: "✅ Explore fresh career paths powered by AI"
          },
          {
            text_3: "✅ Understand the most important AI terms and practices"
          }
        ],
        image: "/#"
      },
      tariffSection: {
        title: "Choose the best plan for you",
        subtitle: "Your promo code applied!",
        description: "By continuing you agree to our Terms of Use and Privacy Policy. By clicking \"Get my plan now\", you agree that your subscription will renew automatically at $19.99/month until you cancel. You can cancel at any time to avoid future charges.",
        subtariff: {
          text: "Your promo code applied!",
          icon: "/#"
        },
        paysystem: [
          {"icon": "/#"},
          {"icon": "/#"},
          {"icon": "/#"},
          {"icon": "/#"},
          {"icon": "/#"}
        ],
        options: [
          {
            id: "weekly",
            title: "Weekly",
            price: "$0.93",
            oldPrice: "$12.99",
            newPrice: "$6.99",
            isDefault: false,
            currency: "USD",
            value: 6.99
          },
          {
            id: "monthly",
            title: "Monthly",
            price: "$0.53",
            oldPrice: "$37.99",
            newPrice: "$15.99",
            isDefault: true,
            currency: "USD",
            value: 15.99
          },
          {
            id: "yearly",
            title: "Yearly",
            price: "$0.10",
            oldPrice: "$76.99",
            newPrice: "$37.99",
            isDefault: false,
            currency: "USD",
            value: 37.99
          }
        ]
      },
      guaranteeSection: {
        title: "Money-Back Guarantee",
        description: "We believe in our service so much that we back it with a 100% money-back guarantee. If you're not satisfied, simply request a refund within 30 days of your first purchase or before your initial subscription ends — whichever happens sooner. Terms and conditions apply. For full information, see our complete refund policy [here].",
        image: "/#"
      },
      benefitsSection: {
        title: "What you get",
        list: [
          {
            text: "Step-by-step guides on the latest AI tools"
          },
          {
            text: "Personalized learning plan"
          },
          {
            text: "In-depth courses to sharpen your skills"
          },
          {
            text: "Practical resources to balance work and life"
          },
          {
            text: "24/7 live chat support to answer questions and prevent errors"
          }
        ]
      },
      reviewSection: {
        title: "People love Studevo",
        reviews: [
          {
            id: "review_1",
            rating: "5.0",
            review: "Learning with Studevo is clear, simple, and packed with all the essentials. It's the perfect starting point if you're just beginning your journey with AI.",
            subtitle: "@sammymcoy1"
          },
          {
            id: "review_2",
            rating: "5.0",
            review: "Studevo offers a broad collection of resources and interactive tools that make even the toughest AI concepts easy to grasp for learners at any level. Huge credit to Studevo for redefining how AI education is delivered!",
            subtitle: "@gloria_hickle"
          },
          {
            id: "review_3",
            rating: "5.0",
            review: "Studevo has made mastering complex subjects much easier while helping me sharpen my skills in different areas. The personalized approach, tailored to my goals, has greatly accelerated my progress and kept me motivated.",
            subtitle: "@pattykuvva"
          }
        ]
      }
    }
  };

  const handleCalcComplete = () => {
    setCurrentSlide("email");
  };

  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
    setCurrentSlide("name");
  };

  const handleNameSubmit = (name: string) => {
    console.log("Name submitted:", name);
    setCurrentSlide("paywall");
  };

  const handlePaywallSubmit = (selectedPlan: any) => {
    console.log("Plan selected:", selectedPlan);
    // Here you would handle the plan selection and payment processing
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
      {currentSlide === "stats" && (
        <ScreenStats
          slideObject={screenStatsObject}
          onButtonClick={handleStatsNext}
        />
      )}
      {currentSlide === "calc" && (
        <ScreenCalc
          slideObject={screenCalcObject}
          onComplete={handleCalcComplete}
        />
      )}
      {currentSlide === "email" && (
        <ScreenEmail
          slideObject={screenEmailObject}
          onSubmit={handleEmailSubmit}
        />
      )}
      {currentSlide === "name" && (
        <ScreenName
          slideObject={screenNameObject}
          onSubmit={handleNameSubmit}
        />
      )}
      {currentSlide === "paywall" && (
        <ScreenPaywall
          slideObject={screenPaywallObject}
          onSubmit={handlePaywallSubmit}
        />
      )}
    </div>
  );
}
