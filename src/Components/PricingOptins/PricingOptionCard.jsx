import React from 'react';
import { Check } from 'lucide-react';
const PricingOptionCard = ({ pricingPlan }) => {
    console.log(pricingPlan);
    return (
        <div className='w-auto rounded-4xl gap-2  bg-sky-200 px-5 '>
            <h2 className='text-7xl font-extrabold'>  {pricingPlan.name}</h2>
            <h4 className='text-5xl font-bold'>{pricingPlan.price_per_month}</h4>
            <p className='text-2xl'>{  pricingPlan.description}</p>
            <Check />
        </div>
    );
};
export default PricingOptionCard;