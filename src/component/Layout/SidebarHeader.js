import React from "react";
import { Routes, Route } from "react-router-dom";
import Friends from "../Section/Friends";
import Nitro from "../Section/Nitro";
import Message from "../Section/Message";

function Header() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/Nitro" element={<Nitro />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
    </>
  );
}

export default Header;
