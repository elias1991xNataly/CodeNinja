import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import People from './components/people';

function App() {
  return (
    <div className="App">
      <NavBar />
      <People />
      <Footer />
    </div>
  );
}

export default App;
