import Canvas from "./canvas_1";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
function App_1() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App_1;
