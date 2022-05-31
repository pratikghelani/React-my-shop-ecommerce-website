import './App.css';
import Home from './Page/Home';
import Productdetails from './Page/Productdetails';
import  Navbar from './Page/Component/Nevbar';
import Footer from './Page/Component/Footer';
import Cart from './Page/Cart';
import { Routes,Route} from "react-router-dom";
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <> 
    <Provider store={store}>
      <Navbar />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="product/:id" element={<Productdetails />} />
              <Route path="Cart" element={<Cart />} />
        </Routes>
      <Footer />
    </Provider>
    </>
  );
}
export default App;
