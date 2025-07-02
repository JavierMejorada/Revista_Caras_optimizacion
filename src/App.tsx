import React from 'react';
import { Header } from './components/Header.tsx';
import { SubscriptionForm } from './components/SubscriptionForm.tsx';
import { FeaturedSection } from './components/FeaturedSection.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Footer } from './components/Footer.tsx';

const App = () => {
  return (
    <>
      <Header />
      <SubscriptionForm />
      <FeaturedSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
