import React from 'react';

const PricingOptionCard = ({pricingPlan}) => {
    console.log(pricingPlan);
    return (
        <div>
            <h2 className='text-7xl font-extrabold'>{pricingPlan.name}</h2>
            <h4 className='text-5xl font-bold'>{pricingPlan.price_per_month}</h4>
            <p className='text-2xl'>{pricingPlan.description}</p>
            {pricingPlan.features.map((feature)=><p>{feature}</p>)}
        </div>
    );
};

export default PricingOptionCard;