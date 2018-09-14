import React from 'react'

class BestSellerSection extends React.Component {
    render() {
        return(
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center">
                        <h2 className="mb-4">Хит продаж</h2>
                    </div>
                    </div>
                    <div className="row d-flex">
                    <div className="col-md-6">
                        <div className="blog-entry align-self-stretch d-flex">
                        <a href="/kymdan2" className="block-20 order-md-last" style={{ backgroundImage: 'url(images/kym2.jpeg)' }}>
                        </a>
                        <div className="text p-4 d-block">
                            <div className="meta mb-3"/>
                            <h3 className="heading mt-3"><a href="/kymdan2">Кымдан-2</a></h3>
                        <br/>
                            <p>Самый универсальный и сильный препарат широкого спектра действия. Содержит уникальные компоненты. Заслужил золото Гран-при множества фестивалей и выставок в Европе и Азии.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-entry align-self-stretch d-flex">
                        <a href="/extract" className="block-20 order-md-last" style={{ backgroundImage: 'url(images/11.jpg)' }}>
                        </a>
                        <div className="text p-4 d-block">
                            <div className="meta mb-3"/>
                            <h3 className="heading mt-3"><a href="/extract">ЭКСТРАКТ КОРЕЙСКОЙ ГОРЯНКИ (ЭПИМЕДИИ)</a></h3>
                            <p>Применяется для повышения сексуального влечения, а также при импотенции и климаксе. Богатый источник икариина. Лечит почки. Укрепляет суставы и позвоночник.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-entry align-self-stretch d-flex">
                        <a href="/royal" className="block-20" style={{ backgroundImage: 'url(images/44.jpg)' }}>
                        </a>
                        <div className="text p-4 d-block">
                            <div className="meta mb-3"/>
                            <h3 className="heading mt-3"><a href="/royal">ROYAL BLOOD FRESH</a></h3>
                            <p>Лучший препарат для очищения крови. Лечит тромбоз, гипертонию и головные боли. Полезен при судорогах мышц, при ухудшении умственных и .....</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-entry align-self-stretch d-flex">
                        <a href="/kymdan5" className="block-20" style={{ backgroundImage: 'url(images/tabl5.jpg)' }}>
                        </a>
                        <div className="text p-4 d-block">
                            <div className="meta mb-3"/>
                            <h3 className="heading mt-3"><a href="/kymdan5">КЫМДАН-5 ТАБЛЕТКИ</a></h3>
                            <p>Стимулирует организм к выработке собственного интерферона. Спасает при лечении гепатита, цирроза печени, воспаления поджелудочной ......</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BestSellerSection