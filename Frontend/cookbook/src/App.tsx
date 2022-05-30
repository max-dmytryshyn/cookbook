import React from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPage } from './components/category/CategoriesPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
