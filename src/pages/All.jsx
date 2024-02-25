import React from 'react';
import Card from './Card'

const All = ({data}) => {
    return (
        <div className='container my-5'>
            <div className='row cardsLayout'>
            {data.map((item, index) => {
                return(
                    <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                        <Card cardData={item} />
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default All;
