import React from 'react'

class MedicineSection extends React.Component {
    render() {
        return(
            <section className="ftco-services">
                <div className="container">
                    <div className="row no-gutters">
                    <div className="col-md-4 py-5 nav-link-wrap">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link px-4 active" id="v-pills-master-tab" data-toggle="pill" href="#v-pills-master" role="tab" aria-controls="v-pills-master" aria-selected="true"><span className="mr-3 flaticon-cardiogram"/> Кымдан-2</a>

                        <a className="nav-link px-4" id="v-pills-buffet-tab" data-toggle="pill" href="#v-pills-buffet" role="tab" aria-controls="v-pills-buffet" aria-selected="false"><span className="mr-3 flaticon-neurology"/> Royal Blood freesh</a>

                        <a className="nav-link px-4" id="v-pills-fitness-tab" data-toggle="pill" href="#v-pills-fitness" role="tab" aria-controls="v-pills-fitness" aria-selected="false"><span className="mr-3 flaticon-stethoscope"/> Кымдан-5</a>

                        <a className="nav-link px-4" id="v-pills-reception-tab" data-toggle="pill" href="#v-pills-reception" role="tab" aria-controls="v-pills-reception" aria-selected="false"><span className="mr-3 flaticon-tooth"/>Экстракт корейской горянки</a>

                        <a className="nav-link px-4" id="v-pills-sea-tab" data-toggle="pill" href="#v-pills-sea" role="tab" aria-controls="v-pills-sea" aria-selected="false"><span className="mr-3 flaticon-vision"/>Медвежая желчь в ампулах</a>

                        <a className="nav-link px-4" id="v-pills-spa-tab" data-toggle="pill" href="#v-pills-spa" role="tab" aria-controls="v-pills-spa" aria-selected="false"><span className="mr-3 flaticon-ambulance"/>Ангунсахянг</a>

                        <a className="nav-link px-4" id="v-pills-spa-tab" data-toggle="pill" href="#v-pills-spa" role="tab" aria-controls="v-pills-spa" aria-selected="false"><span className="mr-3 flaticon-ambulance"/>Тонбанханьамсо: Антираковый препарат</a>

                        </div>
                    </div>
                    <div className="col-md-8 p-4 p-md-5 d-flex align-items-center">
                        
                        <div className="tab-content pl-md-5" id="v-pills-tabContent">

                        <div className="tab-pane fade show active py-5" id="v-pills-master" role="tabpanel" aria-labelledby="v-pills-master-tab">
                            <span className="icon mb-3 d-block flaticon-cardiogram"/>
                            <h2 className="mb-4">КЫМДАН-2 ИНЪЕКЦИЯ (В АМПУЛАХ)</h2>
                            <p>Кымдан-2 оказывает противовоспалительное и обеззараживающее действие, способствуетукреплению иммунитета и быстрой регенерации тканей. Инъекция Кымдан-2 считают одним из самых лучших лекарств, которое лечит бессонницы, хронический колит, все виды полипов, аритмию. </p>
                            <p>При гепатите клинические рекорды намного выше, чем приему мориамина и албезина. Эта инъекция является одним из наилучших препаратов, и лечит много болезней, таких как гастрит, панкреатит, диабет, кровотечение матки, гипотонию, грипп, насморк, разновидности гриппа, невроз сердца, рвоту у беременных, воспаление после операции. Оказывает положительный эффект при лечении раковых заболеваний разных видов, таксол, митомиции.</p>
                            <p><a href="/kymdan2" className="btn btn-primary">Подробнее</a></p>
                        </div>

                        <div className="tab-pane fade py-5" id="v-pills-buffet" role="tabpanel" aria-labelledby="v-pills-buffet-tab">
                            <span className="icon mb-3 d-block flaticon-neurology"/>
                            <h2 className="mb-4">ROYAL BLOOD FRESH / ХЁЛГУНБУЛЛОЧЖОН</h2>
                            <p>Описание«Хёлгунбуллочжон» является здоровой пищей. Он моментально растворяет фибриноген - главный фактор образования тромба, и очень быстро устраняет такие проявления тромбоза, как разные параличи, нарушение движения, нарушение речи, онемечение рук и ног.</p>
                            <p>«Хёлгунбуллочжон» расщепляет липиды в крови и на стенках кровеносных сосудов и помогает успешному лечению гиперлипемии, являющейся причиной разных заболеваний. «Хёлгунбуллочжон», значительно снижая свертываемость крови, обеспечивает равновесие тромборастворимости и свертываемости крови в организме и повышает активность активационного фактора тканевого плазминогена, что благоприятствует растворению тромбов, предотвращает кровоизлияние и рецидив тромбоза. «Хёлгунбуллочжон» проявляет очень сильное антиокислительное действие.</p>
                            <p><a href="/royal" className="btn btn-primary">Подробнее</a></p>
                        </div>

                        <div className="tab-pane fade py-5" id="v-pills-fitness" role="tabpanel" aria-labelledby="v-pills-fitness-tab">
                            <span className="icon mb-3 d-block flaticon-stethoscope"/>
                            <h2 className="mb-4">КЫМДАН-5 ТАБЛЕТКИ</h2>
                            <p>Данный препарат поставляется к нам прямо из Северной Кореи, собственно кроме как в КНДР его найти и купить очень сложно.</p>
                            <p>Этот эксклюзивный препарат является одним из лучших лекарственных средств на основе красного женьшеня. Он не раз получал гран-при и золотые медали на корейских и международных конкурсах и выставках.</p>
                            <p><a href="/kymdan5" className="btn btn-primary">Подробнее</a></p>
                        </div>

                        <div className="tab-pane fade py-5" id="v-pills-reception" role="tabpanel" aria-labelledby="v-pills-reception-tab">
                            <span className="icon mb-3 d-block flaticon-tooth"/>
                            <h2 className="mb-4">ЭКСТРАКТ КОРЕЙСКОЙ ГОРЯНКИ (ЭПИМЕДИИ)</h2>
                            <p>С древних времен считается одним из лучших средств для укрепления организма и восстановления физических и психических сил. Препараты и настои на основе этого растения нужны для профилактики внутренних заболеваний и вирусных инфекций.</p>
                            <p> Экстракт горянки укрепляет иммунитет, прибавляет сил и возвращает радость жизни каждому человеку. Особенно, горянка рекомендована к применению людям среднего и пожилого возраста.Сегодня также экспериментально доказано, что её активные элементы задерживают старение и препятствуют отмиранию клеток в организме. Поэтому еще с древних времен считалось, что она может продлить молодость, а ее регулярное применение способствует долголетию</p>
                            <p><a href="/extract" className="btn btn-primary">Подробнее</a></p>
                        </div>

                        <div className="tab-pane fade py-5" id="v-pills-sea" role="tabpanel" aria-labelledby="v-pills-sea-tab">
                            <span className="icon mb-3 d-block flaticon-vision"/>
                            <h2 className="mb-4">МЕДВЕЖЬЯ ЖЕЛЧЬ В АМПУЛАХ</h2>
                            <p>Традиции народной медицины имеют глубокие корни, с тех времен, когда люди пытались бороться с недугами при помощи трав, шерсти и когтей животных.</p>
                            <p> Сначала они практически ничего не знали о полезных свойствах даров природы и больше надеялись на волшебство, магическую помощь духов и тотемов. Но в результате постоянного применения начали замечать, как тот или иной препарат воздействовал, для каких болезней подходил наилучшим образом. На сегодняшний день возможности растений достаточно изучены.</p>
                            <p><a href="/bear" className="btn btn-primary">Подробнее</a></p>
                        </div>

                        <div className="tab-pane fade py-5" id="v-pills-spa" role="tabpanel" aria-labelledby="v-pills-spa-tab">
                            <span className="icon mb-3 d-block flaticon-ambulance"/>
                            <h2 className="mb-4">АНГУНСАХЯНГ</h2>
                            <p>Влияет на регенерацию нервных волокон, способствует их прорастанию в ткани, восстанавливает миелиновую оболочку. Регулирует мозговое кровообращение, улучшает взаимодействие между структурами головного мозга. Оказывает мягкое спазмолитическое и успокаивающее действие.</p>
                            <p><a href="/angus" className="btn btn-primary">Подробнее</a></p>
                        </div>
                
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MedicineSection