import React from 'react';
import PresentationItem from '../PresentationItem'

const IdcPresentations = () => {
    return (
        <div>
            <h2 className="text-center">Presentaciones</h2>
            <div className="presentations-wrapper">
                <PresentationItem />
            </div>
        </div>
    );
};

export default IdcPresentations;