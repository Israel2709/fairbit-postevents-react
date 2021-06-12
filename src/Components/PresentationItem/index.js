import React from 'react';

const PresentationItem = () => {
    return (
        <div className="card">
            <div className="card-header">
                <img src="" alt="" />
                <div className="speaker-data">
                    <h2>Speaker Name</h2>
                    <h3>Speaker Business</h3>
                </div>
            </div>
            <div className="card-cover"></div>
            <h3 className="card-title">title</h3>
            <div className="card-footer">
                <a href="">descargar</a><a href="">ver presentación</a>
            </div>
        </div>
    );
};

export default PresentationItem;