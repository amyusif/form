import React from "react";

const Reveal = ({ images }) => {
  const imageList = images.map((items) => {
    return <img key={items.id} src={items.webformatURL} alt="" width="350" height="300"/>;
  });

  return <div className="card">
  <div className="card-container">
    {imageList}
  </div>
  </div>;
};

export default Reveal;
