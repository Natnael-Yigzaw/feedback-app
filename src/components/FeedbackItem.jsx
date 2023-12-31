import { useContext } from "react";
import Card from "./shared/Card";
import { FaTrash, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit />
      </button>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTrash color="#EE1D51" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
