import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Glasses, Laptop, Rocket } from "lucide-react";

const services = [
    {
        icon: Brain,
        title: "AI-Powered Learning",
        description: "Adaptive learning algorithms that personalize education paths for every student and employee.",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Glasses,
        title: "Immersive VR/AR Training",
        description: "Realistic simulations for high-risk or complex skill acquisition in a safe virtual environment.",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        icon: Laptop,
        title: "Interactive Web Platforms",
        description: "Gamified learning management systems (LMS) that drive engagement and retention.",
        gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
        icon: Rocket,
        title: "Digital Transformation",
        description: "Consulting and development to modernize your educational infrastructure for the future.",
        gradient: "from-orange-500/20 to-red-500/20"
    }
];

interface ServicesProps {
    id?: string;
}

export const Services = ({ id }: ServicesProps) => {
    return (
        <section id={id} className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Empowering Education Through <span className="text-primary">Technology</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our suite of tools and services is designed to make learning more engaging, effective, and accessible than ever before.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="glass-card border-none group relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <CardHeader>
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 ring-1 ring-white/20 group-hover:ring-primary/50 transition-all duration-500 backdrop-blur-md group-hover:scale-110">
                                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <CardTitle className="text-xl relative z-10">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base relative z-10 text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
