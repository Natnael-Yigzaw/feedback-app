import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handledelete }) => {
  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <p>No feedback Yet</p>
      ) : (
        <div className="feedback-list">
          {feedback.map((item) => (
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handledelete}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FeedbackList;
