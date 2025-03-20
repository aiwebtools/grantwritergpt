
import React from 'react';
import ThreeDElement from './ThreeDElement';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Grant Writer GPT helped us secure a $150,000 grant that we'd been trying to get for over a year. The proposal was detailed and professional, though we did need to make some minor edits before submission.",
    name: "Sarah Johnson",
    title: "Executive Director, Community Outreach Initiative",
    stars: 4,
    avatar: "/photo-1581091226825-a6a2a5aee158"
  },
  {
    quote: "As a small non-profit with limited resources, we weren't sure if AI could really help us. Grant Writer GPT surprised us by creating a solid foundation for our proposal, though we still needed our team to add organization-specific details.",
    name: "Michael Chen",
    title: "Founder, TechFuture Education",
    stars: 3,
    avatar: "/photo-1581092795360-fd1ca04f0952"
  },
  {
    quote: "The level of detail in our budget justification section impressed our funders. It wasn't perfect right away, but after some back-and-forth refinement, we created a compelling financial narrative that helped us secure partial funding.",
    name: "Priya Sharma",
    title: "CFO, Healthcare Access Project",
    stars: 5,
    avatar: "/photo-1649972904349-6e44c42644a7"
  },
  {
    quote: "After three rejected proposals, we used Grant Writer GPT to restructure our approach. It took some time to get the formatting right, but it ultimately helped us identify gaps in our previous applications. We're still waiting on results, but feeling optimistic.",
    name: "Dr. James Wilson",
    title: "Principal Investigator, Urban Research Institute",
    stars: 4,
    avatar: "/photo-1605810230434-7631ac76ec81"
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
            Real Stories from Our Users
          </h2>
          <p className="text-lg text-white/70">
            Organizations are improving their grant proposal process with Grant Writer GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ThreeDElement
              key={index}
              className="glass-morphism rounded-xl p-6"
              glowColor={index % 2 === 0 ? 'blue' : 'purple'}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.stars ? "text-cyber-yellow fill-cyber-yellow" : "text-gray-600"}`} 
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-white/90 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-cyber-blue/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-cyber-blue/20 text-white">
                      {testimonial.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </ThreeDElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
