import React from "react";
import "./MemeCollection.scss";
import { memesData } from "../../data/memesData";
import MemeItem from "./MemeItem";

const MemeCollection: React.FC = () => {
  return (
    <div className="container">
      <div className="memes">
        {memesData.map((meme) => (
          <MemeItem key={meme.id} title={meme.title}></MemeItem>
        ))}
      </div>
    </div>
  );
};

export default MemeCollection;
