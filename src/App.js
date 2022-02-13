import './App.css';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import RecipeReviewCard from "./components/Cards/Cards"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <RecipeReviewCard/>
    </div>
  );
}

export default App;
