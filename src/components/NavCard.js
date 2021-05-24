import React from 'react';

const NavCard = (props) => {
    return (
        <div className="nav-card">
            <h2>{props.title}</h2>
            <p>{props.details}</p>

        </div>
    );
};

export default NavCard;