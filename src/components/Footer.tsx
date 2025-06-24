
import React from 'react';
import PrimaryButton from './PrimaryButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="font-playfair text-3xl font-bold">
              Связаться со мной
            </h2>
            <svg className="w-6 h-6 fill-current text-brown" viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </div>
          
          {/* Иконки соцсетей */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:contact@example.com" className="w-12 h-12 bg-brown rounded-full flex items-center justify-center hover:bg-brown-light transition-colors">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="w-12 h-12 bg-brown rounded-full flex items-center justify-center hover:bg-brown-light transition-colors">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
            <a href="https://t.me/username" className="w-12 h-12 bg-brown rounded-full flex items-center justify-center hover:bg-brown-light transition-colors">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" />
              </svg>
            </a>
            <a href="https://wa.me/1234567890" className="w-12 h-12 bg-brown rounded-full flex items-center justify-center hover:bg-brown-light transition-colors">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M17.472,14.382C17.367,14.382 17.188,14.382 17.188,14.382C16.53,14.382 15.697,14.382 15.697,14.382C15.697,14.382 15.697,14.382 15.697,14.382C15.697,14.382 15.697,14.382 15.697,14.382C15.697,14.382 15.697,14.382 15.697,14.382C15.697,14.382 15.697,14.382 15.697,14.382Z" />
              </svg>
            </a>
          </div>
          
          {/* Повтор информации о стоимости */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-md mx-auto">
            <p className="font-inter text-lg mb-2">
              Стоимость занятий от <span className="font-semibold text-brown">20 000 руб./мес</span>
            </p>
            <p className="font-inter">
              Стоимость пробного занятия — <span className="font-semibold text-brown">бесплатно</span>, ни к чему не обязывает
            </p>
          </div>
          
          {/* Повтор кнопок */}
          <div className="space-y-4 max-w-md mx-auto">
            <PrimaryButton className="w-full">
              Записаться на пробное занятие
            </PrimaryButton>
            <PrimaryButton variant="secondary" className="w-full border-white text-white hover:bg-white hover:text-graphite">
              Напомните мне через 1 месяц
            </PrimaryButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
