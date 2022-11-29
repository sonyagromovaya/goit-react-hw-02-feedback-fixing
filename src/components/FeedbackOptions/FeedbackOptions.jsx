import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.scss';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.div__btn}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
            className={style.feed_back__btn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
