
import React from 'react';
import ThreeDElement from './ThreeDElement';
import { 
  ListChecks, 
  FileSearch, 
  PenTool, 
  Target, 
  Table2, 
  Sparkles, 
  Clock,
  BookOpen
} from 'lucide-react';

const features = [
  {
    icon: <ListChecks className="w-6 h-6 text-cyber-blue" />,
    title: "Thorough Information Gathering",
    description: "Asks targeted questions about your organization, needs, and objectives to create customized grant proposals."
  },
  {
    icon: <FileSearch className="w-6 h-6 text-cyber-purple" />,
    title: "Grant Opportunity Research",
    description: "Helps find suitable funding opportunities that align with your mission and specific project needs."
  },
  {
    icon: <PenTool className="w-6 h-6 text-cyber-teal" />,
    title: "Persuasive Narrative Creation",
    description: "Crafts compelling stories that highlight your impact and make your application stand out to funders."
  },
  {
    icon: <Target className="w-6 h-6 text-cyber-orange" />,
    title: "Strategic Positioning",
    description: "Aligns your proposal with funder priorities and evaluation criteria to maximize approval chances."
  },
  {
    icon: <Table2 className="w-6 h-6 text-cyber-green" />,
    title: "Budget & Financial Analysis",
    description: "Creates detailed budget breakdowns with strong financial rationales that justify requested funds."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-cyber-yellow" />,
    title: "Professional Editing & Revision",
    description: "Provides comprehensive reviews to ensure clarity, persuasiveness, and error-free submissions."
  },
  {
    icon: <Clock className="w-6 h-6 text-cyber-blue" />,
    title: "Time-Saving Workflows",
    description: "Dramatically reduces the time needed to create professional-quality grant applications."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyber-purple" />,
    title: "Complete Document Creation",
    description: "Produces ready-to-submit grant packages with all required attachments and formatting."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/50 via-transparent to-cyber-black/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gradient mb-4">
            How Grant Writer GPT Works For You
          </h2>
          <p className="text-lg text-white/70">
            Our AI assistant follows a structured methodology to create winning grant proposals that meet funder requirements and showcase your impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ThreeDElement
              key={index}
              className="glass-morphism rounded-xl p-6 h-full"
              glowColor={index % 2 === 0 ? 'blue' : 'purple'}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm">
                {feature.description}
              </p>
            </ThreeDElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
