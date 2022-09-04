import React from "react";
import PropTypes from "prop-types";

interface CardProps {
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  prepTime: string;
}

export const Card = ({
  imgSrc,
  name,
  description,
  price,
  prepTime,
}: CardProps) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={`/${imgSrc}.jpg`} alt={`Foto do prato: ${name}`} />
      <p>{description}</p>
      <p>Tempo de preparo{prepTime}</p>
      <p>{price}</p>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  prepTime: PropTypes.string.isRequired,
};
