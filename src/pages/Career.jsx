import React from 'react';
import Card from './Card';

const Career = ({data}) => {
    const careerData = data.filter(item => item.head === 'Career');
    return (
        <div className='container my-5'>
            <div className='row cardsLayout'>
            {careerData.map((item, index) => {
                return(
                    <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                        <Card cardData={item}>
                        </Card>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default Career;