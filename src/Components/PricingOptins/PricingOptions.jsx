import React, { use } from 'react';
import PricingOptionCard from './PricingOptionCard'; 
const PricingOptions = ({pricingOptionsPromise}) => {
const pricingData = use(pricingOptionsPromise);
console.log(pricingData);
    return (
        <div className='grid grid-cols-3'>
            {
                pricingData.map((pricingPlan)=><PricingOptionCard key={pricingData.id} pricingPlan={pricingPlan}></PricingOptionCard>)
            }
        </div>
    );
};
export default PricingOptions;