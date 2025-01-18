import css from "./Options.module.css";

const Options = ({ updateFeedback, total, resetFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.optionItem} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.optionItem}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionItem} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
