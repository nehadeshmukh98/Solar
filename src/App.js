import HomePage from "./componant/HomePage";
import Header from "./componant/Feature";
import Feature from "./componant/Feature";
import Services from "./componant/Services";
import Testimonial from "./componant/Testimonial";
import Footer from "./componant/Footer";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Feature/>
      <Services/> 
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
