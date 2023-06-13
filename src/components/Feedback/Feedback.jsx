import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  handleBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  countTotalFeedback(good, neutral, bad) {
    if (good + neutral + bad === 0) {
      return 0;
    }
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good, neutral, bad) {
    if (good + neutral + bad === 0) {
      return 0;
    }
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.button}>
          <button
            className={css.buttonItem}
            type="button"
            onClick={this.handleGood}
          >
            Good
          </button>
          <button
            className={css.buttonItem}
            type="button"
            onClick={this.handleNeutral}
          >
            Neutral
          </button>
          <button
            className={css.buttonItem}
            type="button"
            onClick={this.handleBad}
          >
            Bad
          </button>
        </div>
        <h2 className={css.title}>Statistics</h2>
        <ul className={css.list}>
          <li className={css.item}>Good: {this.state.good}</li>
          <li className={css.item}>Neutral: {this.state.neutral}</li>
          <li className={css.item}>Bad: {this.state.bad}</li>
          <li className={css.item}>
            Total:{' '}
            {this.countTotalFeedback(
              this.state.good,
              this.state.neutral,
              this.state.bad
            )}
          </li>
          <li className={css.item}>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage(
              this.state.good,
              this.state.neutral,
              this.state.bad
            )}{' '}
            %
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
