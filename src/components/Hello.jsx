import React from "react";
import PropTypes from "prop-types";

export function Hello({ name, price, expiry, onClick }) {
  return (
    <>
      <p onMouseMove={onClick}>
        Product: {name}. Price: ${price} Expiry: {expiry}
      </p>
      <p>Callistus</p>
    </>
  );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  expiry: PropTypes.string.isRequired,
};
