import { Code2, Globe, Cpu, Smartphone } from "lucide-react";

const technologies = [
    { icon: Cpu, name: "Unity & Unreal", category: "XR Development" },
    { icon: Code2, name: "React & Next.js", category: "Web Platforms" },
    { icon: Globe, name: "Three.js & WebGL", category: "3D Web" },
    { icon: Smartphone, name: "Flutter & React Native", category: "Mobile Apps" },
];

export const TechStack = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Built With <span className="text-primary">Cutting-Edge</span> Tech
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We leverage the most powerful and modern technologies to deliver exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                                <tech.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-foreground">{tech.name}</h3>
                            <p className="text-sm text-muted-foreground">{tech.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
