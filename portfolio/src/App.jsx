import React from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Progress from "./components/Progress";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
   <Navbar />
<Intro />
<Skills />
<Progress />
<Works />
<Contact />
<Footer />
    </div>
  );
}

export default App;
