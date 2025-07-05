import React from 'react';
import { Header } from './components/Header/Header.tsx';
import { SubscriptionForm } from './components/SubscriptionForms/SubscriptionForm.tsx';
import { FeaturedSection } from './components/FeaturedSection.tsx';
import { Testimonials } from './components/Testimonials/Testimonials.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { HighlightSection } from './components/HighlightSection/HighlightSection.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main role="main"> 
        <SubscriptionForm />
        <HighlightSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
