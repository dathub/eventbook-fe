import { PageInfo } from 'appConstants';
import MainLayout from 'components/Layout/MainLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Routes>
    {PageInfo.map((page) => (
        <Route key={page.id} path={page.route} element={ <MainLayout content={page.pageComponent}/> }/>
    ))}
    </Routes>
  );
}

export default App;