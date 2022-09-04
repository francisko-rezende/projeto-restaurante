import React from "react";
import { Card } from "../Card";
import PropTypes from "prop-types";

export type DishTypes = "main" | "dessert" | "salad" | "drink" | "entree";

export interface Product {
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  prepTime: string;
  dishType: DishTypes;
  subSection?: string;
}

interface ProductionSectionProps {
  title: string;
  products: Product[];
  subSections?: string[];
}

export const ProductSection = ({
  title,
  products,
  subSections,
}: ProductionSectionProps) => {
  const hasSubSections = subSections && subSections.length >= 2;

  return hasSubSections ? (
    <section>
      {subSections.map((subSection) => (
        <>
          <h3>{subSection}</h3>
          {products
            .filter((product) => product.subSection === subSection)
            .map((product) => (
              <Card key={product.name} {...product} />
            ))}
        </>
      ))}
    </section>
  ) : (
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
  subSections: PropTypes.arrayOf(PropTypes.string),
};
