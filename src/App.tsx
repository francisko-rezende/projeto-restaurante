import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { ProductSection } from "./Components/ProductSection";
import { dishes } from "./assets/dishes.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductSection title="Pratos principais" products={dishes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
