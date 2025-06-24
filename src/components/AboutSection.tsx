
import React from 'react';
import PrimaryButton from './PrimaryButton';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Левая колонка - заголовок */}
          <div className="md:col-span-1">
            <h2 className="font-playfair text-4xl font-bold text-graphite mb-4">
              ОБО МНЕ
            </h2>
            <p className="font-inter text-brown font-medium text-lg">
              Важна гибкость
            </p>
          </div>
          
          {/* Средняя колонка - основной текст */}
          <div className="md:col-span-1">
            <ul className="space-y-4 font-inter text-graphite leading-relaxed">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Путешествую (загляни в мой инстаграм)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Учу настоящему английскому (Жил в Англии)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Уроки заканчиваются не в 00 минут
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Гибкий график (нет штрафов за переносы)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Адаптивная программа под ВАС
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                10 лет жил, учился, работал в Англии
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Преподаю легко и комфортно
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brown rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Большой опыт преподавания с 0
              </li>
            </ul>
          </div>
          
          {/* Правая колонка - кнопка */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <PrimaryButton className="w-full md:w-auto">
              Записаться на пробное занятие
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
