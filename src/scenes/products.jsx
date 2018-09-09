import React from 'react'
import ProductSlider from '../components/product_slider';
import ProductLanding from '../components/products_landing';
import SubscriberSection from '../components/subscriber';

export default class ProductScene extends React.Component {
    render() {
        return(
            <div>
                <ProductSlider />
                <ProductLanding />
                <SubscriberSection/>
            </div>
        )
    }
}