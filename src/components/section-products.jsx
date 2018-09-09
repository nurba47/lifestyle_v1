import React from 'react'

export default class ProductSection extends React.Component {
    render() {
        return(
            <section className="ftco-section-2 img" style={{ backgroundImage: 'url(../images/bg_3.jpg)' }}>
                <div className="container">
                    <div className="row d-md-flex justify-content-end">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <a href="/kymdan2" className="services-wrap">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="ion-ios-arrow-back"/>
                                            <span className="ion-ios-arrow-forward"/>
                                        </div>
                                        <h2>Кымдан-2 Чудо-препарат</h2>
                                        <p>Северная Корея сообщила, что в стране разработан лекарственный препарат, который борется  с коронавирусом MERS, с лихорадкой Эбола и СПИДом.</p>
                                    </a>
                                    <a href="/tonban" className="services-wrap">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="ion-ios-arrow-back"/>
                                            <span className="ion-ios-arrow-forward"/>
                                        </div>
                                        <h2>ТОНБАНХАНЬАМСО: АНТИРАКОВЫЙ ПРЕПАРАТ</h2>
                                        <p>АнтиРак – это единственный в мире препарат на растительной основе, способный с высокой эффективностью лечить раковые заболевания.</p>
                                    </a>
                                    <a href="/royal" className="services-wrap">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="ion-ios-arrow-back"/>
                                            <span className="ion-ios-arrow-forward"/>
                                        </div>
                                        <h2>Royal blood fresh</h2>
                                        <p>Лучший препарат для очищения крови. Применяется при тромбозе, гипертонии и головных болях. Полезен при судорогах мышц,</p>
                                    </a>
                                    <a href="/kymdan5" className="services-wrap">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="ion-ios-arrow-back"/>
                                            <span className="ion-ios-arrow-forward"/>
                                        </div>
                                        <h2>Кымдан-5 Таблетка</h2>
                                        <p>Кымдан-5 Таблетка, ново изготовленный медикамент с помощью сверхсовременной техники, пользуется удобством в их использовании и максимальным эффектом, в результате чего неоднократно получила премии «высший класс» и «золото» </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}