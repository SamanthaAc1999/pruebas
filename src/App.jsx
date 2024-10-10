import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/Principal/Login';
import Denied from './view/Principal/Denied';
import Notfound from './view/Principal/Notfound';
import DotSpinner from './components/Elements/DotSpinner';
import { Layout } from './layouts/layout';
import FiltroGuia from './view/Technicalpicklist';
import Facturas from './view/Facturas';
import Tablero from './view/Tablero';
import Details from './view/DetallesTablero';


function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<DotSpinner/>}>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/denied' element={<Denied/>} />
          <Route path='*' element={<Notfound/>}/>
          {/* DESPACHADOR */}
          <Route path='/despacho' element={<FiltroGuia/>}/>
          {/* LOGISTICO */}
          <Route path='/logistica' element={<Facturas/>}/>
          {/* PRODUCCION */}
          <Route path='/produccion' element={<Tablero/>}/>
          <Route path='/produccion/detalles' element={<Details/>}/>
        </Routes>
        </Layout>
      </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
