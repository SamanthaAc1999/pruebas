import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/Principal/Login';
import Denied from './view/Principal/Denied';
import Notfound from './view/Principal/Notfound';
import Technicalpicklist from './view/Technical/Technicalpicklist';
import Sales from './view/Admin/Sales';
import DotSpinner from './components/Elements/DotSpinner';

const Transport = React.lazy(() => import('./view/Admin/Transport'));
const Picklist = React.lazy(() => import('./view/Admin/Picklist'));
const Guides = React.lazy(() => import('./view/Admin/Guides'));
const Invoices = React.lazy(() => import('./view/Admin/Invoices'));

function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<DotSpinner/>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/denied' element={<Denied/>} />
          <Route path='/notfound' element={<Notfound/>}/>
          {/* TECNICO */}
          <Route path='/technicalpicklist' element={<Technicalpicklist/>}/>
          {/* ADMINISTRATIVO */}
          <Route path='/transport' element={<Transport/>}/>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/guides' element={<Guides/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/picklist' element={<Picklist/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
