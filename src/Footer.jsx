import React from "react";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareFacebook,
} from "react-icons/fa6";
import "./App.css";
import Hora from "./Hora";

const Footer = () => {
  return (
    <div>
      <div className="icon-container">
        <FaSquareInstagram />
        <FaSquareWhatsapp />
        <FaSquareFacebook />
      </div>
      <p>©2023 Copyright: Avalanche</p>
      <p className="horas"><Hora></Hora></p>
    </div>
  );
};

export default Footer;
