import React from 'react'

class Footer extends React.Component {
    render() {
        return(
            <footer className="ftco-footer ftco-bg-dark ftco-section img" style={{ backgroundImage:' url(images/bg_5.jpg)' }}>
    	<div className="overlay"/>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">AromaEco</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="!#"><span className="icon-twitter"/></a></li>
                <li className="ftco-animate"><a href="!#"><span className="icon-facebook"/></a></li>
                <li className="ftco-animate"><a href="!#"><span className="icon-instagram"/></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Реквизиты</h2>
              <ul className="list-unstyled">
                <li><a href="!#" className="py-2 d-block">ОсОО "AromaEco"</a></li>
                <li><a href="!#" className="py-2 d-block">Кыргызстан, г.Бишкек, пр.Жибек-Жолу д.329</a></li>
                <li><a href="!#" className="py-2 d-block">ИНН 00108201710249</a></li>
                <li><a href="!#" className="py-2 d-block">ЗАО "ФИНКА Банк", БИК 138015</a></li>
                <li><a href="!#" className="py-2 d-block">р/с 1380002001037360</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="f-tco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Контакты</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"/><span className="text">Головной офис: г.Ош ул. Ломоносова 1, пересекает Ленина</span></li>
	                <li><a href="!#"><span className="icon icon-phone"/><span className="text">+996 551 26 44 70</span></a></li>
	                <li><a href="!#"><span className="icon icon-envelope"/><span className="text">info@aromaeco.kg aromaeco.kg@gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"/> by <a href="https://nurba47@gmail.com">KNA</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
        )
    }
}

export default Footer