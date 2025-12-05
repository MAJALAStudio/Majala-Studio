import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Users, Lightbulb } from "lucide-react";

interface AboutProps {
    id?: string;
}

export const About = ({ id }: AboutProps) => {
    return (
        <section id={id} className="py-24 relative overflow-hidden bg-secondary/5">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            <Heart className="w-4 h-4 fill-primary/20" />
                            <span className="text-sm font-medium">Our Mission</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Making Learning <br />
                            <span className="text-primary">Joyful & Effective</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Majala Studio, we believe education shouldn't be boring. We fuse the magic of gaming with the rigors of pedagogy to create experiences that learners fall in love with.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our team of educators, developers, and artists work together to push the boundaries of what's possible in EdTech, ensuring every pixel serves a purpose.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <Button className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                Join Our Team
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
                        <div className="space-y-4 translate-y-8">
                            <div className="p-6 rounded-[2rem] bg-white dark:bg-card border border-border shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all hover:-translate-y-1">
                                <Users className="w-10 h-10 text-secondary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Student First</h3>
                                <p className="text-sm text-muted-foreground">Every decision starts with the learner's experience.</p>
                            </div>
                            <div className="p-6 rounded-[2rem] bg-primary/5 border border-primary/10 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all hover:-translate-y-1">
                                <Sparkles className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                                <p className="text-sm text-muted-foreground">We don't follow trends; we set them with VR & AI.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 rounded-[2rem] bg-secondary/5 border border-secondary/10 shadow-xl shadow-secondary/5 hover:shadow-secondary/10 transition-all hover:-translate-y-1">
                                <Lightbulb className="w-10 h-10 text-orange-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Creativity</h3>
                                <p className="text-sm text-muted-foreground">turning complex subjects into beautiful stories.</p>
                            </div>
                            <div className="p-6 rounded-[2rem] bg-white dark:bg-card border border-border shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all hover:-translate-y-1">
                                <Heart className="w-10 h-10 text-red-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Passion</h3>
                                <p className="text-sm text-muted-foreground">We love what we do, and it shows in our work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
