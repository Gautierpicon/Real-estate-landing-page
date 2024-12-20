import PropertyModal from "./components/PropertyModal.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Home />

      <FeaturedProperties />

      <Contact />

      <Footer />
    </div>
  );
}

export default App