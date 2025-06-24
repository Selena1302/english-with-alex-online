
import React from 'react';
import PrimaryButton from './PrimaryButton';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold text-graphite text-center mb-16">
          Видео-визитка
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Левая часть - видео */}
          <div className="relative">
            <div className="aspect-video bg-graphite rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="font-inter">Видео-визитка</p>
              </div>
            </div>
          </div>
          
          {/* Правая часть - информация и кнопки */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="font-inter text-lg text-graphite mb-2">
                Стоимость занятий от <span className="font-semibold text-brown">20 000 руб./мес</span>
              </p>
              <p className="font-inter text-graphite">
                Стоимость пробного занятия — <span className="font-semibold text-brown">бесплатно</span>, ни к чему не обязывает
              </p>
            </div>
            
            <div className="space-y-4">
              <PrimaryButton className="w-full">
                Записаться на пробное занятие
              </PrimaryButton>
              <PrimaryButton variant="secondary" className="w-full">
                Напомните мне через 1 месяц
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
