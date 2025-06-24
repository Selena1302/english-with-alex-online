
import React from 'react';
import PrimaryButton from './PrimaryButton';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Левая часть - фотография */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Александр Лукиенко"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brown opacity-20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold opacity-30 rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Правая часть - текстовый блок */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-graphite mb-6 leading-tight">
              Лукиенко<br />
              <span className="text-brown">Александр</span>
            </h1>
            
            <h2 className="font-inter text-xl md:text-2xl text-graphite font-light mb-8 tracking-wide">
              Преподаватель Английского
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-8">
              <p className="font-inter text-lg text-graphite mb-2">
                <span className="font-semibold">Стоимость:</span>
              </p>
              <p className="font-playfair text-2xl text-brown font-semibold">
                От 20 000 руб. / мес
              </p>
            </div>
            
            <PrimaryButton className="w-full md:w-auto">
              Записаться на пробное занятие
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
