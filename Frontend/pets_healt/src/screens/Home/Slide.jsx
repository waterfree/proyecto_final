import react, { Fragment, useRef, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
//import "./Slide.css";

export default function SlideHome() {
  return (
    <div className="p-9">
      <ul className="slider">
        <li id="slide1">En campusMVP</li>
        <li id="slide2">encontrarás los mejores</li>
        <li id="slide3">cursos online de programación</li>
        <li id="slide4">y aprenderás de la mano</li>
        <li id="slide5">de los mejores profesionales</li>
      </ul>
      <nav>
        <ul className="menu">
          <li>
            <a href="#slide1">Diapositiva 1</a>
          </li>
          <li>
            <a href="#slide2">Diapositiva 2</a>
          </li>
          <li>
            <a href="#slide3">Diapositiva 3</a>
          </li>
          <li>
            <a href="#slide4">Diapositiva 4</a>
          </li>
          <li>
            <a href="#slide5">Diapositiva 5</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
