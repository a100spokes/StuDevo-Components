import LandindSlide from "../components/slides/LandindSlide";

export default function Index() {
  // Sample slideObject as provided in the requirement
  const slideObject = {
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
            icon: "/#"
          },
          {
            title: "RATED ON TRUSTPILOT",
            description: "4.5 Satisfaction Score",
            icon: "/#"
          }
        ],
        footerLinks: [
          {
            label: "Terms and Conditions",
            href: "/#"
          },
          {
            label: "Privacy Policy",
            href: "/#"
          },
          {
            label: "Subscription Terms",
            href: "/#"
          }
        ]
      }
    }
  };

  const handleButtonClick = (buttonText: string) => {
    console.log(`Button clicked: ${buttonText}`);
    // Here you would handle navigation to the next slide
    // For now, just logging the action
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LandindSlide
        slideObject={slideObject}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}
