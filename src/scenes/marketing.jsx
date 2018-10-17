import React from 'react'
import mark from "../images/mark.jpeg";
export default class MarketingScene extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#fff' }}>
                <div className="container" style={{ padding: '50px 25px', backgroundColor: '#fff' }}>
                    <h1><strong><i>Маркетинг План</i></strong></h1>
                    <div class="img-thumbnail" style={{ padding: "50px 0" }}>
                        <a href={mark} className="swipebox">
                            <img src={mark} alt="image1"
                                 style={{border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px'}}
                                 width="400px" className="img-responsive"/>
                        </a>
                    </div>
                    <h1><u><i><strong>Прайс- Лист</strong></i></u></h1>
                    <table border="1" cellPadding="8" cellSpacing="0">
                        <tr>
                            <th colSpan="5" bgcolor="aqua" align="left">
                                № п/п
                            </th>
                            <th colSpan={5} bgcolor="aqua">Наименования продукции</th>
                            <th colSpan={5} bgcolor="aqua">Цена для дистрибьюторов(y.e.)</th>
                            <th colSpan={5} bgcolor="aqua">Цена для потребителей(y.e.)</th>
                        </tr>
                        <tr onInput={1}>
                            <td colSpan="5" bgcolor="aqua">1.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Кымдан - 2</td>
                            <td colSpan={5} bgcolor="#f0ffff">1 800</td>
                            <td colSpan={5} bgcolor="#f0ffff">2 200</td>
                        </tr>
                        <tr>
                            <td colSpan="5" bgcolor="aqua">2.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Кымдан - 5</td>
                            <td colSpan={5} bgcolor="#f0ffff">3 200</td>
                            <td colSpan={5} bgcolor="#f0ffff">4 000</td>
                        </tr>
                        <tr>
                            <td colSpan="5" bgcolor="aqua">3.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Ангунсахьянг</td>
                            <td colSpan={5} bgcolor="#f0ffff">3 700</td>
                            <td colSpan={5} bgcolor="#f0ffff">4 000</td>
                        </tr>
                        <tr>
                            <td colSpan="5" bgcolor="aqua">4.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Медвежая желчь в ампулах</td>
                            <td colSpan={5} bgcolor="#f0ffff">2 500</td>
                            <td colSpan={5} bgcolor="#f0ffff">2 800</td>
                        </tr>
                        <tr>
                            <td colSpan="5" bgcolor="aqua">5.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Хёлгунбуллочжон - Royal Blood Fresh</td>
                            <td colSpan={5} bgcolor="#f0ffff">2 800</td>
                            <td colSpan={5} bgcolor="#f0ffff">3 400</td>
                        </tr>
                        <tr>
                            <td colSpan="5" bgcolor="aqua">6.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Экстракт корейской горянки</td>
                            <td colSpan={5} bgcolor="#f0ffff">1 800</td>
                            <td colSpan={5} bgcolor="#f0ffff">2 200</td>
                        </tr>
                        <tr>
                            <td colSpan="5" bgcolor="aqua">7.</td>
                            <td colSpan={5} bgcolor="#f0ffff">Тонбанханьамсо: АнтиРак</td>
                            <td colSpan={5} bgcolor="#f0ffff">17 000</td>
                            <td colSpan={5} bgcolor="#f0ffff">20 000</td>
                        </tr>
                    </table>
                </div>
            </div>

        )
    }
}