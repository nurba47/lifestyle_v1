import React from 'react'

export default class CounterSection extends React.Component {
    render() {
        return(
            <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(images/bg_4.jpg)' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section heading-section-white">
                            <h2 className="mb-4">Some fun facts</h2>
                            <span className="subheading">Far far away, behind the word mountains, far from the countries</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}