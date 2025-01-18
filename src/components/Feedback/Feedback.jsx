import css from "./Feedback.module.css";

const Feedback = ({ feedback, total }) => {
  return (
    <ul className={css.feedbackGroup}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {Math.round((feedback.good / total) * 100)}%</li>
    </ul>
  );
};

export default Feedback;
