import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handledelete }) => {
  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <p>No feedback Yet</p>
      ) : (
        <div className="feedback-list">
          <AnimatePresence>
            {feedback.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FeedbackItem
                  key={item.id}
                  item={item}
                  handleDelete={handledelete}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default FeedbackList;
