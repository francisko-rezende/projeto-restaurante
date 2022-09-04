import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { formatPrice } from "../../utils";

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
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h4>{name}</h4>
      <img
        className={styles.cardImg}
        src={`/${imgSrc}.jpg`}
        alt={`Foto do prato: ${name}`}
      />
      <p>{description}</p>
      <p>Tempo de preparo: {prepTime} minutos</p>
      <p>{formatPrice(price)}</p>
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
