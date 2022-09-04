import React from "react";
import { Card } from "../Card";
import PropTypes from "prop-types";
import styles from "./ProductSection.module.css";

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
    <section className={styles.section}>
      {subSections.map((subSection) => (
        <div style={{ display: "grid", gap: "1rem" }}>
          <h3>{subSection}</h3>
          <div className={styles.cardsWrapper}>
            {products
              .filter((product) => product.subSection === subSection)
              .map((product) => (
                <Card key={product.name} {...product} />
              ))}
          </div>
        </div>
      ))}
    </section>
  ) : (
    <section className={styles.section}>
      <div style={{ display: "grid" }}>
        <h2>{title}</h2>
        <div className={styles.cardsWrapper}>
          {products.map((product: Product) => (
            <Card key={product.name} {...product} />
          ))}
        </div>
      </div>
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
