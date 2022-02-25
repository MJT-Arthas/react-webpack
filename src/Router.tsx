import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Detail from "./page/detail";

function BasicRoute() {
  return (
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/detail" element={Detail()} />
    </Routes>
  );
}

export default BasicRoute;
