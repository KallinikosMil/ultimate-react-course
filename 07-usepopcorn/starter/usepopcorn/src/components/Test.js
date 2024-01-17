import React, { useState } from 'react';
import StarRating from './StarRating';

const Test = () => {

  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </div>
  );
};

export default Test;
