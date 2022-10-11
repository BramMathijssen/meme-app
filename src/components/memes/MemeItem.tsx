import React from "react";
import MemeActions from "./MemeActions";
import "./MemeItem.scss";

const MemeItem: React.FC<{ id: string, title: string; image: string }> = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="meme-item">
        <h3 className="meme-item__title">{props.title}</h3>
        <div className="meme-item__container">
          <img className="meme-item__image" src={props.image} alt="test"></img>
        </div>
        <MemeActions memeId={props.id}/>
      </div>
    </React.Fragment>
  );
};

export default MemeItem;
