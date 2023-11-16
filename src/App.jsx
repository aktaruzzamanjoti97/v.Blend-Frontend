import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "./Pages/HomePage/HomePage";
import ProductLibrary from "./Pages/ProductLibrary/ProductLibrary";

function App() {
  return (
    <Container>
      <HomePage />
      <ProductLibrary />
    </Container>
  );
}

export default App;
