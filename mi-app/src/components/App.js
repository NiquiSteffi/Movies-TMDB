import styles from '../styles/App.module.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { MovieDetails } from '../pages/MovieDetails';
import { LandingPage } from '../pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        </header>
        <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
