
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does Grant Writer GPT work?",
    answer: "Grant Writer GPT uses advanced AI to help you craft professional grant proposals. It gathers information about your organization, identifies funding needs, creates structured outlines, and drafts compelling content tailored to specific funders' requirements. The tool guides you through each section of the proposal, from executive summaries to budget justifications, ensuring a complete and persuasive application."
  },
  {
    question: "Is Grant Writer GPT appropriate for all types of grants?",
    answer: "Yes, Grant Writer GPT can assist with various grant types, including federal, state, foundation, corporate, research, and nonprofit grants. It adapts to specific funder guidelines and can tailor proposals based on the particular requirements of each grant opportunity."
  },
  {
    question: "Do I need grant writing experience to use this tool?",
    answer: "No prior grant writing experience is required. Grant Writer GPT guides you through the entire process, asking the right questions and providing structure. However, users with specific knowledge about their organization's mission, projects, and needs will achieve the best results."
  },
  {
    question: "Can Grant Writer GPT help with finding grant opportunities?",
    answer: "Yes, Grant Writer GPT can help identify potential funding opportunities that match your organization's mission and needs. It can suggest grants that align with your objectives, though for the most comprehensive grant search, it works best when you have specific grants in mind."
  },
  {
    question: "How much does it cost to use Grant Writer GPT?",
    answer: "Grant Writer GPT is available through OpenAI's GPT platform. You'll need an appropriate OpenAI subscription to access the tool. Visit the OpenAI website for current pricing information."
  },
  {
    question: "Is my information secure when using Grant Writer GPT?",
    answer: "Grant Writer GPT follows OpenAI's data security and privacy policies. While the tool processes your information to generate proposals, you should review OpenAI's privacy policy for complete details on how your data is handled."
  },
  {
    question: "Can I edit the proposals created by Grant Writer GPT?",
    answer: "Absolutely. The proposals generated are starting points that you should review, customize, and refine. You can request revisions directly in the tool or export the content to edit in your preferred word processor."
  },
  {
    question: "How long does it take to create a complete grant proposal?",
    answer: "The time needed varies based on the grant's complexity and how prepared you are with organizational information. A basic proposal might take 1-3 hours of interaction, while complex federal grants could require several sessions. The tool significantly reduces the time compared to traditional grant writing methods."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70">
            Get answers to common questions about Grant Writer GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-cyber-blue/20 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button 
                className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                  openIndex === index ? 'bg-cyber-blue/10' : 'bg-cyber-black/30'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-display font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyber-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyber-blue" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-cyber-black/20 text-white/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
