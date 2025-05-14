import './App.css'
import Header from "./components/Header.jsx"
import Acerca from "./components/Acerca.jsx"
import Proyectos from "./components/Proyectos.jsx"
import Contacto from "./components/Contacto.jsx"

function App() {


  return (
    <div className="font-sans">
      <Header />
      <main>
        <Acerca />
        <Proyectos />
        <Contacto />
      </main>
    </div>
  );
}

export default App
