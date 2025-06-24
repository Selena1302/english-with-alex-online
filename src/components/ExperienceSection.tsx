
import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold text-graphite text-center mb-16">
          ОПЫТ
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream rounded-lg p-12 text-center shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-graphite mb-4">
              Преподаватель английского языка
            </h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <span className="font-inter text-lg text-graphite">
                Онлайн
              </span>
              <div className="w-px h-8 bg-brown opacity-30"></div>
              <span className="font-playfair text-3xl font-bold text-brown">
                11 лет
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
