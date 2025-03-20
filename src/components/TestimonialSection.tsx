
import React from 'react';
import ThreeDElement from './ThreeDElement';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Grant Writer GPT helped us secure a $250,000 grant that we'd been trying to get for two years. The proposal was so professional that the foundation specifically mentioned its clarity in their approval letter.",
    name: "Sarah Johnson",
    title: "Executive Director, Community Outreach Initiative",
    stars: 5
  },
  {
    quote: "As a small non-profit, we never had the resources to hire professional grant writers. With Grant Writer GPT, we've increased our success rate by 65% and tripled our funding in just six months.",
    name: "Michael Chen",
    title: "Founder, TechFuture Education",
    stars: 5
  },
  {
    quote: "The level of detail in our budget justification section impressed our funders. Grant Writer GPT helped us create a compelling financial narrative that showcased our efficiency and impact.",
    name: "Priya Sharma",
    title: "CFO, Healthcare Access Project",
    stars: 5
  },
  {
    quote: "After three rejected proposals, we used Grant Writer GPT and won our first federal grant. The tool understood exactly what reviewers were looking for and helped us position our research perfectly.",
    name: "Dr. James Wilson",
    title: "Principal Investigator, Urban Research Institute",
    stars: 5
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-cyber-darker">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block p-3 bg-cyber-purple/10 border border-cyber-purple/20 rounded-full mb-4">
            <Quote className="w-6 h-6 text-cyber-purple" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gradient mb-4">
            Success Stories from Our Users
          </h2>
          <p className="text-lg text-white/70">
            Organizations around the world are securing funding with proposals crafted using Grant Writer GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ThreeDElement
              key={index}
              className="glass-morphism rounded-xl p-6"
              glowColor={index % 2 === 0 ? 'blue' : 'purple'}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cyber-yellow fill-cyber-yellow" />
                ))}
              </div>
              <blockquote className="text-white/90 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.title}</p>
              </div>
            </ThreeDElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
