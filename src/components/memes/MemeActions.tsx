import { FolderPlus } from "phosphor-react";
import React from "react";
import "./MemeActions.scss";
import { ArrowUp, ArrowDown, ChatText } from "phosphor-react";
import { motion } from "framer-motion";

const MemeActions = () => {
  return (
    <div className="actions">
      <div className="actions__controls">
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
        >
          <ArrowUp color="#32ec76" size={25} />
        </motion.a>
        <p>0</p>
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
        >
          <ArrowDown color="#32ec76" size={25} />
        </motion.a>
      </div>
      <div className="actions__comments">
        <p>0</p>
        <ChatText size={25} />
      </div>
    </div>
  );
};

export default MemeActions;
