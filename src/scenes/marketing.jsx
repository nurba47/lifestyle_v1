import React from 'react'
export default class MarketingScene extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#fff' }}>
                <div className="container" style={{ padding: '50px 25px', backgroundColor: '#fff' }}>
                    <h1><strong><i>Маркетинг План</i></strong></h1>
                    <table border="1" cellPadding="8" cellSpacing="0">
                        <tr>
                            <th colSpan="5" bgcolor="#7fffd4" align="left">
                                Вход в баллах
                                1-Б = 100 y.eL
                            </th>
                            <th colSpan="5" bgcolor="#7fffd4">Активность 54 балл</th>
                            <th colSpan="5" bgcolor="#7fffd4">Продукция при входе и активность</th>
                            <th colSpan="5" bgcolor="#7fffd4">Выплаты в % ( 1 - Балл = 100 y.e.)</th>
                            <th colSpan="5" bgcolor="#7fffd4">Бонусы</th>
                            <th colSpan="5" bgcolor="#7fffd4">Льгота 360-Баллов</th>
                        </tr>
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
                    </table>
                    <h1><u><i><strong>Прайс- Лист</strong></i></u></h1>
                    <table border="1" cellPadding="8" cellSpacing="0">
                        <tr>
                            <th colSpan="5" bgcolor="aqua" align="left">
                                № п/п
                            </th>
                            <th colSpan={5} bgcolor="aqua">Наименования продукции</th>
                            <th colSpan={5} bgcolor="aqua">Цена для дистрибьюторов(сом)</th>
                            <th colSpan={5} bgcolor="aqua">Цена для потребителей(сом)</th>
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
                            <td colSpan={5} bgcolor="#f0ffff">Ангунсахянг</td>
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