import ROUTES, { RenderRoutes } from './router/routes';
import './css/my-theme.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import {Provider} from 'react-redux';

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
