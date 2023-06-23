import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button}>
      {options.map((buttonName, index) => (
        <button
          className={css.buttonItem}
          key={index}
          onClick={() => onLeaveFeedback(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  Object: PropTypes.shape({
    options: PropTypes.objectOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  }),
};
