import React, { useEffect, useState } from "react";
import "./MemeCollection.scss";
import MemeItem from "./MemeItem";
import { getAllMemes } from "./../../lib/api";
import { memeObj } from "../../models/meme";

const MemeCollection: React.FC = () => {
  const [memes, setMemes] = useState<memeObj[]>([]);

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await getAllMemes();
      console.log(res);
      setMemes(res);
    };
    fetchMemes();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="memes">
          {memes.map((meme) => (
            <MemeItem
              key={meme.id}
              id={meme.id}
              title={meme.title}
              image={meme.image}
              upvotes={meme.upvotes}
            ></MemeItem>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemeCollection;
