import React from 'react';
import './Information.css';
import PropTypes from 'prop-types';

const Information = ({ data }) => {

    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <span>{item.id}</span>
                        <h5>{item.name}</h5>
                        <span>{item.age}</span>
                        <h5>{item.country}</h5>
                    </div>
                ))
            }
        </div>
    );

}

Information.propTypes = {
    data: PropTypes.array.isRequired
}

export default Information;
