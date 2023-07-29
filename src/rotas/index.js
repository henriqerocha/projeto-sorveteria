import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sabores from "../paginas/paginaSabores";
import Sobre from "../paginas/paginaSobre";
import Home from "../paginas/paginaHome";

const Rotas = () =>(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/sabores" element={<Sabores/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>
        </Routes>
    </BrowserRouter>
);

export default Rotas;
