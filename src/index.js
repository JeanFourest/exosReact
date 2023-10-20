import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './components/todo';
import Compteur from './components/compteur';
import Profil from './components/profil';
import Layout from './components/layout';
import Products from './components/products';
import Films from './components/films';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/compteur" element={<Compteur />} />
        <Route path="*" element={<Compteur />} />
        <Route path="Profil/:id" element={<Profil />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
