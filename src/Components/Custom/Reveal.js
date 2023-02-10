import React from "react";

const Reveal = ({ images }) => {
  const imageList = images.map((items) => {
    return <img key={items.id} src={items.webformatURL} alt="" />;
  });

  return <div>{imageList}</div>;
};

export default Reveal;
