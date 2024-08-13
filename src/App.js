import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routers';

function App() {
  return (
    <Router>
      <div className="container" style={{ minHeight: '100vh' }}>
        <Header />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;