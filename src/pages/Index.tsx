import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Smartphone, Monitor, Headphones, BookOpen, Settings, Map, Users } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import educationalImage from "@/assets/educational-games.jpg";
import vrImage from "@/assets/vr-gaming.jpg";
import simulationImage from "@/assets/simulation-games.jpg";

const Index = () => {
  const gameTypes = [
    {
      icon: Settings,
      title: "Development Tools",
      description: "Cutting-edge tools and engines for game developers to create amazing experiences.",
      image: simulationImage
    },
    {
      icon: BookOpen,
      title: "Educational Games",
      description: "Interactive learning experiences that make education engaging and fun for all ages.",
      image: educationalImage
    },
    {
      icon: Users,
      title: "Simulation Games",
      description: "Realistic simulations that let players experience and manage complex systems.",
      image: simulationImage
    },
    {
      icon: Map,
      title: "Interactive & Explorative",
      description: "Open-world experiences that encourage exploration and player creativity.",
      image: vrImage
    }
  ];

  const platforms = [
    {
      icon: Smartphone,
      title: "Android",
      description: "Mobile gaming experiences optimized for Android devices"
    },
    {
      icon: Monitor,
      title: "PC Gaming",
      description: "High-performance games for Windows, Mac, and Linux"
    },
    {
      icon: Headphones,
      title: "VR Experience",
      description: "Immersive virtual reality games and applications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-red/80 to-gaming-red-light/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-white">MAJALA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Crafting the Future of Interactive Entertainment
          </p>
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto animate-fade-in">
            We develop innovative games and tools across Android, PC, and VR platforms, 
            specializing in educational, simulation, and explorative experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore Our Games
            </Button>
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Innovation Meets <span className="text-gaming-red">Entertainment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MAJALA is a cutting-edge game studio dedicated to pushing the boundaries of interactive entertainment. 
              We create experiences that educate, simulate, and inspire across multiple platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-gaming-red">Specializations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We excel in creating diverse gaming experiences that engage, educate, and entertain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-gaming-red/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gaming-red to-gaming-red-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Multi-Platform <span className="text-gaming-red">Development</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Reaching players wherever they are with optimized experiences for every platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-secondary/50">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-gaming-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <platform.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{platform.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    {platform.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gaming-red to-gaming-red-light">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join us in shaping the future of interactive entertainment. Let's build extraordinary experiences together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start a Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-tech-gray text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gaming-red">MAJALA</h3>
          <p className="text-white/80 mb-6">
            Innovative Game Studio • Android • PC • VR
          </p>
          <p className="text-white/60">
            © 2024 MAJALA Game Studio. Crafting the future of interactive entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;