import React from 'react';
import './banner.css';
import PropTypes from "prop-types";

export const Banner = ({ imgSrc, imgAlt, label }) => (
    <div>
        <div className={'banner__img'}><img src={imgSrc} alt={imgAlt}/></div>
        <span className={'banner__label'}>{label}</span>
    </div>
);

Banner.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    imgAlt: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

Banner.defaultProps = {
    imgSrc: 'f',
    imgAlt: 'f',
    label: 'hi',
};
