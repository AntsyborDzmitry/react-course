import './styles/libs/bootstrap-grid.min.css';
import './styles/index.scss';
import React from 'react';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
