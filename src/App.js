import ROUTES, { RenderRoutes } from "./router/routes";
import "./styles/css/my-theme.css";
import Header from "./components/core/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <RenderRoutes routes={ROUTES} />
      </Container>
    </>
  );
}

export default App;
