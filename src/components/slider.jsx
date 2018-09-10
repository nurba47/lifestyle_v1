import React from 'react'

class Slider extends React.Component {
    render() {
        return(
            <div className="hero-wrap" style={{ backgroundImage: 'url(/images/bg_1.jpg)', backgroundAttachment:'fixed' }}>
                <div className="overlay"/>
                <div className="scrollax">
                <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-8 text-center">
                    <h1 className="mb-4">Самый лучший способ предсказать будущее – создать его</h1>
                    <p>Проект создан при компании AromaEco</p>
                    </div>
                </div>
                </div>
          </div> 
        )
    }
}

export default Slider