import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button
      className={styles.btn}
      type={children === 'Add contact' ? 'submit' : 'button'}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
