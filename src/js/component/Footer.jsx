import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md d-flex justify-content-center">
        <a className="navbar-brand">{props.copyRights}</a>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  copyRights: PropTypes.string,
};
