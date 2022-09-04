import React from "react";
import { Card } from "../Card";
import PropTypes from "prop-types";

export type DishTypes = "main" | "dessert" | "salad" | "wine" | "entree";

export interface Product {
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  prepTime: string;
  dishType: DishTypes;
}

interface ProductionSectionProps {
  title: string;
  products: Product[];
}

export const ProductSection = ({ title, products }: ProductionSectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {products.map((product: Product) => (
        <Card key={product.name} {...product} />
      ))}
    </section>
  );
};

ProductSection.propType = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      prepTime: PropTypes.string.isRequired,
    })
  ),
};
