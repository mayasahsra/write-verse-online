
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SearchIcon, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container-custom flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="font-serif font-black text-2xl tracking-tight">WriteVerse</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/explore" className="font-medium hover:text-primary transition-colors">Explore</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/search">
            <Button variant="ghost" size="icon" aria-label="Search">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/write">
            <Button>Write</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
