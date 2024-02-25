import React from "react";
import NavBar from "./components/Navbar";
import All from "./pages/All";
import Fsd from "./pages/Fsd";
import Ds from "./pages/Ds";
import CyberSecurity from "./pages/CyberSecurity";
import Career from "./pages/Career";
import { Route, Routes } from "react-router-dom";
import coursesData from "../src/pages/blogData.json"

const App = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // const blogData = shuffleArray(coursesData);
  const blogData = coursesData;
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<All data={blogData}/>}></Route>
          <Route path="/fullstackdevelopment" element={<Fsd data={blogData}/>}></Route>
          <Route path="/datascience" element={<Ds data={blogData}/>}></Route>
          <Route path="/cybersecurity" element={<CyberSecurity data={blogData} />}></Route>
          <Route path="/career" element={<Career data={blogData} />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
