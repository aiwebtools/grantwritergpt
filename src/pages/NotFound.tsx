
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FileQuestion } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-blue/10 mb-6">
            <FileQuestion className="w-8 h-8 text-cyber-blue" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-white/70 mb-8">Oops! This page doesn't exist</p>
          
          <CTAButton 
            href="/" 
            variant="primary"
            size="lg"
          >
            Return to Home
          </CTAButton>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
