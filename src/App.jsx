import React from 'react';
import Wishlist from './components/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default App;
