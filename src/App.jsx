import PropertyModal from "./Components/PropertyModal.jsx";
import FeaturedProperties from "./Components/FeaturedProperties.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import { useState } from "react";

function App() {

  const [selectedProperty, setSelectedProperty] =useState(null);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Home />

      <FeaturedProperties setSelectedProperty={setSelectedProperty}/>

      <Contact />

      <Footer />


      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  );
}

export default App