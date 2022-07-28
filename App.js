import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import WhatIUse from "./components/WhatIUse";
import ContactMe from "./components/ContactMe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
      <AboutMe />
      <WhatIUse />
      <ContactMe />

      {/* Ceci est le copyright du site, soumis à la license GNU Gpl V3, tout retrait de ce copyright pourra être soldé par une poursuite judiciaire. */}
      <footer>
        <p>
          <FontAwesomeIcon icon="fa-solid fa-heart" color="#d63031" />
          Réalisé par <a href="https://github.com/RedsTom/">RedsTom</a> et
          Tambadou Tidiane sur une idée originale de <a href="https://bdph.me">Baptiste Dauphouy</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
