import './Item.css';
import React from 'react';

const Item = (props) => {
    return (
        <div>
            <div className="card tam">
                <button type="button" className="border border-0 border-light bg-transparent border-opacity-1">
                    <img src={props.children.image} className="card-img itemImg" alt="" />
                    <div className="card-img-overlay content">
                        <div className="center">{props.children.name}</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Item;