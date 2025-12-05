import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Layout = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-primary font-bold bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-white/5";
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
            {/* Vision OS Floating Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-white/10 bg-background/60 backdrop-blur-xl shadow-2xl shadow-primary/5 flex items-center justify-between p-2 px-6 transition-all duration-300 hover:bg-background/80">
                <Link to="/" className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary px-2">
                    MAJALA
                </Link>

                <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                    <Link
                        to="/"
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/')}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/apps"
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/apps')}`}
                    >
                        Apps
                    </Link>
                    <a
                        href="#"
                        className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                    >
                        Solutions
                    </a>
                    <a
                        href="#"
                        className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                    >
                        About
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:flex rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground">
                        Sign In
                    </Button>
                    <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
                        Contact
                    </Button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow pt-0">
                <Outlet />
            </main>

            {/* Universal Footer */}
            <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-lg">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground/80">MAJALA STUDIO</h3>
                    <p className="text-muted-foreground/60 mb-8 max-w-md mx-auto text-sm">
                        Pioneering the future of education through immersive technology and interactive experiences.
                    </p>
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
