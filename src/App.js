import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Body = lazy(() => import('./components/Body'));
const SchoolRegistrationForm = lazy(() => import('./components/SchoolRegistrationForm'));

function App() {
  return (
    <Router>
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
     {/*  <Body/> */}
      <Routes>
        <Route path="/" Component={Body} />
      </Routes>
      <Routes>
        <Route path="/schoolRegistrationForm" element={<SchoolRegistrationForm />} />
      </Routes>
      </Suspense>
    </div>
    
    </Router>
  );
}

export default App;
