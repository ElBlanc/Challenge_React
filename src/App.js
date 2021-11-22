import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cars from "./Components/Cars/Cars";
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <Cars/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
