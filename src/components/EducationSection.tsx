
import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold text-graphite text-center mb-16">
          ОБРАЗОВАНИЕ
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            <div className="border-l-4 border-brown pl-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="font-inter font-semibold text-brown text-lg min-w-[120px]">
                  2008–2010
                </span>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">
                    Brighton College, Brighton
                  </h3>
                  <p className="font-inter text-graphite opacity-80">
                    политика, экономика, математика, физика, русский язык
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-brown pl-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="font-inter font-semibold text-brown text-lg min-w-[120px]">
                  2010–2013
                </span>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">
                    Royal Holloway, University of London, Egham
                  </h3>
                  <p className="font-inter text-graphite opacity-80">
                    Экономика, политика, международные отношения
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-brown pl-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="font-inter font-semibold text-brown text-lg min-w-[120px]">
                  2019
                </span>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">
                    Arizona State University
                  </h3>
                  <p className="font-inter text-graphite opacity-80">
                    Теория изучения иностранных языков
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
