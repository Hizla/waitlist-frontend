import HeroSection from "@/components/pages/home/hero-section";
import FeatureCard from "@/components/pages/home/layout-card";
import { Terminal } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Easy Dashboard",
      description:
        "Manage all your links and view analytics in a user-friendly, intuitive dashboard.",
      icon: <Terminal />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Get in-depth insights into who’s clicking on your links with advanced analytics.",
      icon: <Terminal />,
    },
    {
      title: "Bulk Creation & Edit",
      description:
        "Easily create and edit multiple shortened links in bulk, saving you time and effort.",
      icon: <Terminal />,
    },
    {
      title: "Meta Editing",
      description: "Customize metadata like title, description, and image for better engagement on social platforms.",
      icon: <Terminal />,
    },
    {
      title: "Android & iOS Targeting",
      description: "Direct users to different destinations based on their mobile device—Android or iOS.",
      icon: <Terminal />,
    },
    {
      title: "Country Targeting",
      description:
        "Send users from different countries to tailored destinations with country-level targeting.",
      icon: <Terminal />,
    },
    {
      title: "Password Protection & Expiry Date",
      description:
        "Secure your links with passwords and set expiry dates to control link access.",
      icon: <Terminal />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <Terminal />,
    },
  ];
  return (
    <main>
      <div className="container">
        <HeroSection />
      </div>
      <div className="bg-gradient-to-t from-white to-transparent backdrop-blur-sm -mt-6">
        <div className="bg-dot-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 container pl-1 pt-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
