import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Images from 'pages/Images/Images';
import Favourites from 'pages/Favourites/Favourites';
import NotFound from 'pages/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="images" element={<Images />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
