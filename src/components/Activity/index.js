import React from 'react';
import { Style } from './style';

import deletesymbol from './assets/delete.svg';

export const Activity = ({ className, name, date }) => {
    return (
        <Style className={className} titlelength={name.length}>
            <div className="information">
                <div className="information-wrapper">
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div className="delete">
                <img src={deletesymbol} />
            </div>
        </Style>
    )
}