import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";
import YoutubeVideos from "./YoutubeVideos.js/YoutubeVideos";
import Iphone from "./Iphone/Iphone";
import Sharedlayout from "./Sharedlayout/Sharedlayout";
import Main from "./Main/Main1";
import SingleAppleProduct from "./SingleAppleProduct/SingleAppleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<YoutubeVideos />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphones/:productUrl" element={<SingleAppleProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
