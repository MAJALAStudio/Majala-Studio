import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Layout = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-primary font-bold bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-white/5";
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
            {/* Vision OS Floating Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full glass-nav flex items-center justify-between p-2 px-6 transition-all duration-300 hover:bg-background/80 shadow-2xl shadow-primary/5">
                <Link to="/" className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary px-2 hover:opacity-80 transition-opacity">
                    MAJALA
                </Link>

                <div className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-white/5 rounded-full p-1.5 border border-white/20 backdrop-blur-xl shadow-inner">
                    <a
                        href="#home"
                        className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:shadow-md text-foreground/80 hover:text-foreground hover:-translate-y-0.5"
                    >
                        Home
                    </a>
                    <a
                        href="#apps"
                        className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:shadow-md text-foreground/80 hover:text-foreground hover:-translate-y-0.5"
                    >
                        Apps
                    </a>
                    <a
                        href="#solutions"
                        className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:shadow-md text-foreground/80 hover:text-foreground hover:-translate-y-0.5"
                    >
                        Solutions
                    </a>
                    <a
                        href="#about"
                        className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:shadow-md text-foreground/80 hover:text-foreground hover:-translate-y-0.5"
                    >
                        About
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="hidden sm:flex rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground px-4">
                        Sign In
                    </Button>
                    <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 px-6">
                        Contact
                    </Button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Universal Footer */}
            <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-lg">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground/80">MAJALA STUDIO</h3>
                    <p className="text-muted-foreground/60 mb-8 max-w-md mx-auto text-sm">
                        Pioneering the future of education through immersive technology and interactive experiences.
                    </p>

                    <div className="flex justify-center gap-6 mb-8">
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 text-sm text-muted-foreground/60">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
                    </div>
                    <p className="text-xs text-muted-foreground/40 mt-8">
                        © 2024 Majala Studio. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
