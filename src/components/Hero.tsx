import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 container px-4 md:px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-secondary mb-8 animate-fade-in shadow-lg shadow-primary/5">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Next-Gen Educational Technology</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary animate-fade-in">
                    The Future of Learning <br /> Is Interactive
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
                    We combine cutting-edge AR/VR, AI, and mobile technologies to create immersive training and educational experiences that stick.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-200">
                    <Button size="lg" className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground group">
                        Start Your Transformation
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 h-14 border-primary/20 hover:bg-primary/5">
                        View Solutions
                    </Button>
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
