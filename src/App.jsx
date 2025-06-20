import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Contactpage from './pages/Contactpage';
import FreeQuote from './component/FreeQuote';
import PageNotFound from './pages/PageNotFound';
import PopiPage from './pages/PopiPage';
import OptPage from './pages/OptPage';
import Insurance from './pages/Insurance/Insurance';
import AutoInsuracne from './pages/Insurance/AutoInsuracne';
import Medicalinsurance  from './pages/Insurance/Medicalinsurance';
import FinancialInsurance from './pages/Insurance/FinancialInsurance';
import BuisnessInsurance from './pages/Insurance/BuisnessInsurance';
function App() {
  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/free-quote' element={<FreeQuote/>}/>
      <Route path='/popi' element={<PopiPage/>}/>
      <Route path='/opt' element={<OptPage/>}/>
      <Route path='/auto' element={<AutoInsuracne/>}/>
      <Route path='/medical' element={<Medicalinsurance/>}/>
      <Route path='/financial' element={<FinancialInsurance/>}/>
      <Route path='/business' element={<BuisnessInsurance/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
      
      
      
    </>
  );
}

export default App;