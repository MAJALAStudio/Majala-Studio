import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Apps } from "@/components/Apps";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero id="home" />
      <Services id="solutions" />
      <Apps id="apps" />
      <TechStack />
      <About id="about" />
    </div>
  );
};

export default Index;
