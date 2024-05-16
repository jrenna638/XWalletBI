import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

function Home() {
  const navbarLinks = [
      { path: '/features', label: 'Características' },
      { path: '/about', label: 'Acerca De' },
      { path: '/contact', label: 'Contacto' }
  ];

  return (
      <div>
          <Navbar links={navbarLinks} />
          <HeroSection 
              title="Bienvenido a XWallet" 
              subtitle="Gestiona tus finanzas con facilidad y seguridad." 
              buttonText="Saber Más"
          />
          
          <Footer />
      </div>
  );
}

export default Home;