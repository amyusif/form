import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import Reveal from "./Reveal";
import "../Style/Render.css";

const Render = () => {
  const [Rend, setRend] = useState([]);

  const searchSubmit = async (entry) => {
    const callBack = await axios.get(`https://pixabay.com/api/?key=29277356-18ae8059fd03787c3002d30ac&q=${entry}&image_type=photo
        `);
    setRend(callBack.data.hits);
  };

  return (
    <div className="render">
      <div className="render-box">
        <div className="top">
          <Search searchSubmit={searchSubmit} />
        </div>
        <div className="bottom">
          <Reveal images={Rend} />
        </div>
      </div>
    </div>
  );
};

export default Render;
