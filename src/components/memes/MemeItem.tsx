import React from "react";
import "./MemeItem.scss";

const MemeItem: React.FC<{ title: string; image: string }> = (props) => {
  return (
    <div className="meme-item">
      <h3 className="meme-item__title">{props.title}</h3>
      <div className="meme-item__container">
        <img className="meme-item__image" src={props.image} alt="test"></img>
      </div>
    </div>
  );
};

export default MemeItem;
