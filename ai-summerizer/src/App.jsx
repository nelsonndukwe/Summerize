import "./App.css";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className="">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>

      <Footer />
    </main>
  );
}

export default App;
