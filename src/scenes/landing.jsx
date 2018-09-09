import React from 'react'
import Slider from '../components/slider';
import MedicineSection from '../components/section-medicine';
import ProductSection from '../components/section-products';
import BestPartnerSection from '../components/section-best-partners';
import BestSellerSection from '../components/section-bestsellers';
import CounterSection from '../components/section-counter';
import SubscriberSection from '../components/subscriber';

export default class DefaultScene extends React.Component {
    render() {
        return(
            <div>
                <Slider />
                <MedicineSection />
                <ProductSection />
                <BestPartnerSection />
                <BestSellerSection />
                <CounterSection />
                <SubscriberSection />
            </div>
        )
    }
}