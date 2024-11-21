import React, { useState } from 'react';
import Main_section from './components/Main_section';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('about');

  // Function to render the active section dynamically
  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className='[background:radial-gradient(125%_125%_at_50%_2%,#1f1f1f_40%,#63e_100%)] min-h-screen'>
      <Main_section />
      {/* Pass the setActiveSection function to the Header */}
      <Header setActiveSection={setActiveSection} />
      {/* Render the dynamically selected section */}
      <div>
        {renderSection()}
      </div>
    </div>
  );
};

export default App;
