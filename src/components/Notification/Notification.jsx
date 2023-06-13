import css from './Notification.module.css';
import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
