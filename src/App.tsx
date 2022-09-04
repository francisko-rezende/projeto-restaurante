import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { ProductSection } from "./Components/ProductSection";
import { dishes } from "./assets/dishes.json";
import { DishTypes, Product } from "./Components/ProductSection/ProductSection";
import { Container } from "./Components/Container";

const getFilteredProducts = (products: Product[], dishType: DishTypes) =>
  products.filter((product) => product.dishType === dishType);

const entrees = getFilteredProducts(dishes as Product[], "entree");
const salads = getFilteredProducts(dishes as Product[], "salad");
const mainDishes = getFilteredProducts(dishes as Product[], "main");
const desserts = getFilteredProducts(dishes as Product[], "dessert");
const wines = getFilteredProducts(dishes as Product[], "drink");

function App() {
  return (
    <Container>
      <Navbar />
      <main style={{ display: "grid" }}>
        <ProductSection title="Entradas" products={entrees} />
        <ProductSection title="Salads" products={salads} />
        <ProductSection
          title="Pratos principais"
          products={mainDishes}
          subSections={["Peixes", "Saladas"]}
        />
        <ProductSection title="Sobremesas" products={desserts} />
        <ProductSection
          title="Vinhos"
          products={wines}
          subSections={["Cervejas", "Vinhos", "Drinks"]}
        />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
