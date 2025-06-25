import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.js";

function App() {

  return (
    // Link context to state by passing state into the value
    <CartContextProvider >
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
