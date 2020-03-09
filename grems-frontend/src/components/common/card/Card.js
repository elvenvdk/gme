import React from 'react';

import './Card.scss';

const Card = ({
  classname,
  title,
  titleClassname,
  imgSrc,
  imgClassname,
  imgAlt,
  children,
}) => {
  return (
    <div className={`card-default ${classname}`}>
      <div className={`card-default__img-wrapper`}>
        <h1 className={`card-default__img-wrapper__title ${titleClassname}`}>
          {title}
        </h1>
        <img
          className={`card-default__img-wrapper__img ${imgClassname}`}
          src={imgSrc}
          alt={`peach-cobbler-jar-image ${imgAlt}`}
        />
      </div>
      {children}
    </div>
  );
};

export default Card;
