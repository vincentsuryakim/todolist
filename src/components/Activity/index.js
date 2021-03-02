import React from 'react';
import { Style } from './style';

import deletesymbol from './assets/delete.svg';

export const Activity = ({ name, date, index, data, setData }) => {

    const deleteData = () => {
        setData(data.filter((item) => data.indexOf(item) != index))
    }

    return (
        <Style>
            <div className="information">
                <div className="information-wrapper">
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div className="delete">
                <img src={deletesymbol} onClick={(e) => deleteData()}/>
            </div>
        </Style>
    )
}
