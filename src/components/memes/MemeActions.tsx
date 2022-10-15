import "./MemeActions.scss";
import { ArrowUp, ArrowDown, ChatText } from "phosphor-react";
import { motion } from "framer-motion";
import { voteActions } from "./../../store/index";
import { useAppSelector, useAppDispatch } from "../../hooks/typedHooks";

type MemeActionsProps = {
  memeId: string,
  upvotes: number
}

const MemeActions = (props: MemeActionsProps) => {
  //const votesResult = useSelector((state: RootState) => state.result);
  const votesResult = useAppSelector((state) => state.result);
  const itemsList = useAppSelector((state) => state.itemsList);
  const dispatch = useAppDispatch();

  const upVoteHandler = () => {
    dispatch(voteActions.upVote(props.memeId));
  };

  const downVoteHandler = () => {
    dispatch(voteActions.downVote());
  };
  console.dir(itemsList)
  return (
    <div className="actions">
      <div className="actions__controls">
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
          onClick={upVoteHandler}
        >
          <ArrowUp color="#32ec76" size={25} />
        </motion.a>
        <p>{props.upvotes}</p>
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
          onClick={downVoteHandler}
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
