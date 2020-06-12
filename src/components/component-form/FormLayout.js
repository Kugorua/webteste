/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import './form-layout.scss';
import { Link } from 'gatsby';
import imgGp972svg from '../../svgs/Group-972.svg';

const FormFooter = () => {
  return (
    <footer>
      <p>Powered by NewsPicks</p>
    </footer>
  );
};

const FormLayout = ({ children }) => {
  return (
    <>
      <div className="form-area">
        <div className="form-area__upper-space"></div>
        <div className="form-area__upper-area">
          <Link to="/">
            <img src={imgGp972svg} />
          </Link>
          <p className="form-area__upper-area--title">イベントエントリーフォーム</p>
        </div>
        <main>{children}</main>
        <FormFooter />
      </div>
    </>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormLayout;
