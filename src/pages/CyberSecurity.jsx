import React from 'react';
import Card from './Card';

const CyberSecurity = ({data}) => {
    const cyberData = data.filter(item => item.head === 'Cyber Security');
    return (
        <div className='container my-5'>
            <div className='row cardsLayout'>
            {cyberData.map((item, index) => {
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

export default CyberSecurity;