import React from 'react'

export default class ProductSlider extends React.Component {
    render() {
        return(
            <div className="hero-wrap" style={{ backgroundImage: 'url(images/bg_6.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="overlay"/>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-8 text-center">
                            <p className="breadcrumbs"><span className="mr-2"><a href="/">Главная</a></span><span>Каталог</span></p>
                            <h1 className="mb-3 bread">Лекарство</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}