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

const Apps = () => {
    const [filter, setFilter] = useState("All");

    const displayedApps = filter === "All" ? apps : apps.filter(app => app.category === filter);

    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Our Applications
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our portfolio of cutting-edge educational and training applications powered by next-gen technology.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat)}
                            className="rounded-full px-6"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedApps.map((app) => (
                        <Card key={app.id} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 hover:border-primary/50 backdrop-blur-sm bg-card/50">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                    <Badge variant="secondary" className="mb-2">
                                        {app.category}
                                    </Badge>
                                    <Badge
                                        variant={app.status === "Live" ? "default" : "outline"}
                                        className={app.status === "Live" ? "bg-green-500/20 text-green-400 border-green-500/50" : ""}
                                    >
                                        {app.status}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center gap-2">
                                    <Rocket className="w-5 h-5" />
                                    {app.title}
                                </CardTitle>
                                <CardDescription className="text-base mt-2">
                                    {app.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {app.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="ghost"
                                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                >
                                    Learn More
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apps;
