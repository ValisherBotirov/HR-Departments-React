import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UserSingle from "./pages/UserSingle";
import "./App.css";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<AddUser />} />
          <Route path="/create/:id" element={<UserSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
