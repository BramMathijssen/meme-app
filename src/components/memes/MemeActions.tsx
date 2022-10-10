import { FolderPlus } from "phosphor-react";
import React from "react";
import "./MemeActions.scss";
import { ArrowUp, ArrowDown, ChatText } from "phosphor-react";

const MemeActions = () => {
  return (
    <div className="actions">
      <div className="actions__controls">
        <ArrowUp color="#32ec76" size={25} />
        <p>0</p>
        <ArrowDown color="#32ec76" size={25} />
      </div>
      <div className="actions__comments">
        <p>0</p>
        <ChatText size={25} />
      </div>
    </div>
  );
};

export default MemeActions;
