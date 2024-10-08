import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/Principal/Login';
import Denied from './view/Principal/Denied';
import Notfound from './view/Principal/Notfound';
import Sales from './view/Admin/Sales';
import DotSpinner from './components/Elements/DotSpinner';
import { Layout } from './layouts/layout';
import FiltroGuia from './view/Technical/Technicalpicklist';

const Transport = React.lazy(() => import('./view/Admin/Transport'));
const Picklist = React.lazy(() => import('./view/Admin/Picklist'));
const Guides = React.lazy(() => import('./view/Admin/Guides'));
const Invoices = React.lazy(() => import('./view/Admin/Invoices'));

function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<DotSpinner/>}>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/denied' element={<Denied/>} />
          <Route path='/notfound' element={<Notfound/>}/>
          {/* TECNICO */}
          <Route path='/technicalpicklist' element={<FiltroGuia/>}/>
          {/* ADMINISTRATIVO */}
          <Route path='/transport' element={<Transport/>}/>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/guides' element={<Guides/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/picklist' element={<Picklist/>}/>
        </Routes>
        </Layout>
      </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
