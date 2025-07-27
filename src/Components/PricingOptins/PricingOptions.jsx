import React, { use } from 'react';
import PricingOptionCard from './PricingOptionCard'; 

const PricingOptions = ({pricingOptionsPromise}) => {
const pricingData = use(pricingOptionsPromise);
console.log(pricingData);
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                pricingData.map((pricingPlan)=><PricingOptionCard key={pricingData.id} pricingPlan={pricingPlan}></PricingOptionCard>)
            }
        </div>
    );
};

export default PricingOptions;