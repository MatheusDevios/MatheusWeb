import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Project1 from "./routes/project1";
import Project2 from "./routes/project2";
import Project3 from "./routes/project3";
import Project4 from "./routes/project4";
import Project5 from "./routes/project5";
import Project6 from "./routes/project6";
import { AnimatePresence } from 'framer-motion';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <AnimatePresence>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
        <Route path="project5" element={<Project5 />} />
        <Route path="project6" element={<Project6 />} />
      </Routes>
    </BrowserRouter>
  </AnimatePresence>
);