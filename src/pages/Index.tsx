
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import VideoSection from '../components/VideoSection';
import DocumentsSection from '../components/DocumentsSection';
import PhotosSection from '../components/PhotosSection';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <DocumentsSection />
      <SectionDivider />
      <PhotosSection />
      <Footer />
    </div>
  );
};

export default Index;
