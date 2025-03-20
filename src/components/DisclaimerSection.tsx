
import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const DisclaimerSection: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block p-3 bg-cyber-red/10 border border-cyber-red/20 rounded-full mb-4">
            <AlertTriangle className="w-6 h-6 text-cyber-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gradient mb-4">
            Legal Disclaimer
          </h2>
          <p className="text-lg text-white/70">
            Important information about using Grant Writer GPT
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-morphism rounded-xl p-8 border border-white/10">
          <div className="flex items-start mb-6">
            <Shield className="w-6 h-6 text-cyber-red flex-shrink-0 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Limitation of Liability
              </h3>
              <p className="text-white/70 mb-4">
                AI WEB TOOLS LLC ("Company") provides Grant Writer GPT as an AI assistant tool only. While we strive for accuracy and professionalism, the Company makes no warranties, express or implied, regarding the success of any grant application created using this tool. The Company shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use Grant Writer GPT or any grants created with its assistance.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <Shield className="w-6 h-6 text-cyber-red flex-shrink-0 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                No Legal or Professional Advice
              </h3>
              <p className="text-white/70 mb-4">
                Grant Writer GPT is not a substitute for professional grant writing services or legal advice. The content and suggestions provided by the tool do not constitute professional opinions. Users should verify all information and seek appropriate professional advice before submitting any grant applications.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <Shield className="w-6 h-6 text-cyber-red flex-shrink-0 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Data Privacy and Security
              </h3>
              <p className="text-white/70 mb-4">
                By using Grant Writer GPT, you acknowledge that your inputs are processed according to OpenAI's privacy policy. The Company is not responsible for the security or privacy of information processed through the OpenAI platform. Users should exercise caution when inputting sensitive organizational or personal information.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <Shield className="w-6 h-6 text-cyber-red flex-shrink-0 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Intellectual Property
              </h3>
              <p className="text-white/70 mb-4">
                Users retain ownership of the specific content they create using Grant Writer GPT. However, the tool itself, including its algorithms, processes, and interfaces, remains the intellectual property of OpenAI and/or the Company. Users may not reverse engineer, decompile, or extract the underlying models or code.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-cyber-red flex-shrink-0 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                User Responsibility
              </h3>
              <p className="text-white/70">
                Users are solely responsible for the accuracy, appropriateness, and legality of information submitted in their grant applications. The user must ensure all statements made in grant applications are truthful and verifiable. The Company assumes no responsibility for misrepresentations, errors, or omissions in submitted grant applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
