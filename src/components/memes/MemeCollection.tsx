import React from "react";
import "./MemeCollection.scss";
import { memesData } from "../../data/memesData";
import MemeItem from "./MemeItem";
import {getAllMemes} from './../../lib/api'

const MemeCollection: React.FC = () => {
  console.log(getAllMemes());
  return (
    <div className="container">
      <div className="memes">
        {memesData.map((meme) => (
          <MemeItem key={meme.id} id={meme.id} title={meme.title} image={meme.image}></MemeItem>
        ))}
      </div>
    </div>
  );
};

export default MemeCollection;
