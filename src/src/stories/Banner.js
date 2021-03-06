import React from 'react';
import './banner.css';
import PropTypes from "prop-types";
import {ScrollArrow} from "./ScrollArrow";

export const Banner = ({ imgSrc, imgAlt }) => (
    <div className={'banner'}>
        <div className={'banner__img'}><img src={imgSrc} alt={imgAlt}/></div>
        <div className={'banner__icondown'}>
            <ScrollArrow/>
        </div>
    </div>
);

Banner.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

Banner.defaultProps = {
    imgSrc: 'f',
    imgAlt: 'f',
};
