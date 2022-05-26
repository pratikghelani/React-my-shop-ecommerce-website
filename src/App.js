import './App.css';
import Home from './Page/Home';
import Productdetails from './Page/Productdetails';
import  Navbar from './Page/Component/Nevbar';
import Footer from './Page/Component/Footer';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
function App() {
  return (
    <> 
      <Navbar />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="product/:id" element={<Productdetails />} />
    </Routes>
    <Footer />
    </>
  );
}
export default App;
