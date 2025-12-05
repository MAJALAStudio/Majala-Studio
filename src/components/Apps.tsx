import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rocket } from "lucide-react";

// Mock Data for Applications
const apps = [
    {
        id: 1,
        title: "MedSim VR",
        category: "VR",
        description: "High-fidelity medical training simulation for surgical procedures in Virtual Reality.",
        tags: ["Unity", "VR", "Healthcare"],
        status: "Live"
    },
    {
        id: 2,
        title: "EduQuest Mobile",
        category: "Mobile",
        description: "Gamified learning platform for K-12 students covering math and science curriculums.",
        tags: ["React Native", "Mobile", "Education"],
        status: "Beta"
    },
    {
        id: 3,
        title: "SafetyFirst AR",
        category: "AR",
        description: "Augmented Reality safety training for industrial workers identifying hazards in real-time.",
        tags: ["ARCore", "Mobile", "Industrial"],
        status: "Live"
    },
    {
        id: 4,
        title: "CorpTrain AI",
        category: "Web",
        description: "AI-powered corporate training dashboard that adapts content to employee performance.",
        tags: ["React", "AI", "Enterprise"],
        status: "In Development"
    },
    {
        id: 5,
        title: "HistoryWalk",
        category: "AR",
        description: "Location-based AR experience bringing historical events to life in city centers.",
        tags: ["Niantic Lightship", "AR", "Tourism"],
        status: "Live"
    },
    {
        id: 6,
        title: "CodeMaster 3D",
        category: "Web",
        description: "Browser-based 3D environment for learning programming concepts visually.",
        tags: ["Three.js", "WebGL", "Education"],
        status: "Alpha"
    }
];

const categories = ["All", "VR", "AR", "Mobile", "Web"];

interface AppsProps {
    id?: string;
}

export const Apps = ({ id }: AppsProps) => {
    const [filter, setFilter] = useState("All");

    const displayedApps = filter === "All" ? apps : apps.filter(app => app.category === filter);

    return (
        <section id={id} className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Our <span className="text-primary">Applications</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our portfolio of cutting-edge educational and training applications.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "secondary"}
                            onClick={() => setFilter(cat)}
                            className={`rounded-full px-6 transition-all duration-300 ${filter === cat ? 'shadow-lg shadow-primary/25 scale-105' : 'hover:bg-secondary/20 scale-100'}`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedApps.map((app) => (
                        <Card key={app.id} className="glass-card border-none group relative overflow-hidden h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                    <Badge variant="secondary" className="mb-2 bg-secondary/10 text-secondary hover:bg-secondary/20">
                                        {app.category}
                                    </Badge>
                                    <Badge
                                        variant={app.status === "Live" ? "default" : "outline"}
                                        className={app.status === "Live" ? "bg-green-500/20 text-green-500 border-green-500/50" : "text-muted-foreground"}
                                    >
                                        {app.status}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-primary" />
                                    {app.title}
                                </CardTitle>
                                <CardDescription className="text-base mt-2 line-clamp-2">
                                    {app.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {app.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs border-white/20 bg-white/10">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    className="w-full rounded-xl bg-white/50 hover:bg-primary hover:text-white dark:bg-white/5 dark:hover:bg-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 text-foreground"
                                >
                                    Learn More
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
