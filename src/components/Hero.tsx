import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
    id?: string;
}

export const Hero = ({ id }: HeroProps) => {
    return (
        <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container px-4 md:px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-secondary mb-8 animate-fade-in shadow-lg shadow-primary/5 hover:bg-white/10 transition-colors cursor-default">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Next-Gen Educational Technology</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 animate-fade-in">
                    The Future of Learning <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary text-glow">
                        Is Interactive
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in delay-100 leading-relaxed">
                    We combine cutting-edge AR/VR, AI, and mobile technologies to create immersive training and educational experiences that stick.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-200">
                    <Button size="lg" className="text-lg px-8 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 group">
                        Start Your Transformation
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105">
                        View Solutions
                    </Button>
                </div>
            </div>
        </section>
    );
};
