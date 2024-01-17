import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({
  className = '',
  maxRating = 5,
  color = '#fcc419',
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {
  const styles = {
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    starContainerStyle: {
      display: 'flex',
    },
    textStyle: {
      lineHeight: '1',
      margin: 0,
      color: color,
      fontSize: `${size}px`,
    },
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
    if (onSetRating) onSetRating(rating);
  };

  return (
    <div style={styles.containerStyle} className={className}>
      <div style={styles.starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={styles.textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
};
StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};
export default StarRating;
