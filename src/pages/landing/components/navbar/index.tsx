import { X, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur-md border-b border-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">Flux Network</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="hover:text-purple-600 transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-purple-600 transition-colors">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
              Log in
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              Try for free
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-3 pt-3">
                <Button variant="outline" className="w-full border-purple-500 text-purple-500 hover:bg-purple-50">
                  Log in
                </Button>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Try for free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;