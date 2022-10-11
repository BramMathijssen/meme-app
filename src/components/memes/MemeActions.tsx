import "./MemeActions.scss";
import { ArrowUp, ArrowDown, ChatText } from "phosphor-react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { voteActions } from "./../../store/index";
import { useAppSelector, useAppDispatch} from "../../hooks/typedHooks";

const MemeActions = () => {

  //const votesResult = useSelector((state: RootState) => state.result);
  const votesResult = useAppSelector((state) => state.result)

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
