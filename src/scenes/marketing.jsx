import React from 'react'
import {Table} from 'react-bootstrap'
export default class MarketingScene extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#fff' }}>
                <div className="container" style={{ padding: '50px 25px', backgroundColor: '#fff' }}>
                    <h1><strong>Маркетинг План</strong></h1>
                    <Table responsive border="1" cellPadding="8" cellSpacing="0">
                        <thead>
                        <tr>
                            <th colSpan="5" bgcolor="#7fffd4" align="left">
                                Вход в баллах
                                1-Б = 100 y.e
                            </th>
                            <th colSpan="5">Активность 54 балл</th>
                            <th colSpan="5">Продукция при входе и активность</th>
                            <th colSpan="5">Выплаты в % ( 1 - Балл = 100 y.e.)</th>
                            <th colSpan="5">Бонусы</th>
                            <th colSpan="5">Льгота 360-Баллов</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr onInput={1}>
                            <td colSpan="5">100 Баллов</td>
                            <td colSpan="5">Каждый месяц (ежемесячно)</td>
                            <td colSpan="5">5 упаковок Кымдан - 2 при активности 3 упаковки</td>
                            <td colSpan="5">10% выплаты до 5ого уровня</td>
                            <td colSpan="5">по 950 Баллов с двух соток 10 000 y.e.</td>
                            <td colSpan="5">-</td>
                        </tr>
                        <tr>
                            <td colSpan="5">250 Баллов</td>
                            <td colSpan="5">Каждый 6 месяц (полугодовое)</td>
                            <td colSpan="5">13 упаковок Кымдан-2 при активности 3 упаковки +1 упаковка в подарок</td>
                            <td colSpan="5">12% выплаты от личного приглашеннных</td>
                            <td colSpan="5">при льготной программе 20 000 y.e в подарок</td>
                            <td colSpan="5">-</td>
                        </tr>
                        <tr>
                            <td colSpan="5">400 Баллов</td>
                            <td colSpan="5">В год 1 раз(годовое)</td>
                            <td colSpan="5">21 упаковка Кымдан-2 + при активности 3 упаковки Кымдан-2 в подарок</td>
                            <td colSpan="5">15% выплаты от личного приглашенных</td>
                            <td colSpan="5">при льготной программе 20 000 y.e в подарок</td>
                            <td colSpan="5">-</td>
                        </tr>
                        </tbody>
                    </Table>
                    <h1><u><i><strong>Прайс- Лист</strong></i></u></h1>
                    <Table border="1" cellPadding="8" cellSpacing="0">
                        <tr>
                            <th colSpan="5" bgcolor="#7fffd4" align="left">
                                № п/п
                            </th>
                            <th>Наименования продукции</th>
                            <th>Цена для дистрибьюторов(сом)</th>
                            <th>Цена для потребителей(сом)</th>
                        </tr>
                        <tr onInput={1}>
                            <td colSpan="5">1.</td>
                            <td>Кымдан - 2</td>
                            <td>1 800</td>
                            <td>2 200</td>
                        </tr>
                        <tr>
                            <td colSpan="5">2.</td>
                            <td>Кымдан - 5</td>
                            <td>3 200</td>
                            <td>4 000</td>
                        </tr>
                        <tr>
                            <td colSpan="5">3.</td>
                            <td>Ангунсахянг</td>
                            <td>3 700</td>
                            <td>4 000</td>
                        </tr>
                        <tr>
                            <td colSpan="5">4.</td>
                            <td>Медвежая желчь в ампулах</td>
                            <td>34</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td colSpan="5">5.</td>
                            <td>Хёлгунбуллочжон - Royal Blood Fresh</td>
                            <td>2 800</td>
                            <td>3 400</td>
                        </tr>
                        <tr>
                            <td colSpan="5">6.</td>
                            <td>Экстракт корейской горянки</td>
                            <td>1 800</td>
                            <td>2 200</td>
                        </tr>
                        <tr>
                            <td colSpan="5">7.</td>
                            <td>Тонбанханьамсо: АнтиРак</td>
                            <td>17 000</td>
                            <td>20 000</td>
                        </tr>
                    </Table>
                </div>
            </div>

        )
    }
}