import React from 'react';
import Card from './Card';

const Fsd = ({data}) => {
    const fsdData = data.filter(item => item.head === 'Full Stack Development');
    return (
        <div className='container my-5'>
            <div className='row cardsLayout'>
            {fsdData.map((item, index) => {
                return(
                    <div key={index}  className='col-lg-3 col-md-4 col-sm-6'>
                        <Card cardData={item}>
                        </Card>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default Fsd;