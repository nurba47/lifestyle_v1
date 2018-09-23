import React from 'react'
import document1 from '../images/document1.jpeg'
import document2 from '../images/document2.jpeg'
import document3 from '../images/document3.jpg'
import document4 from '../images/document4.jpg'
import document5 from '../images/document5.jpeg'
import document6 from '../images/document6.jpg'
import document7 from '../images/document7.jpg'

export default class DocumentScene extends React.Component {
    render() {
        return(
            <div style={{ backgroundColor: '#a7ffeb'}}>
                <div>
                    <div class="img-thumbnail" style={{ padding: "50px 0" }}>
                        <a href={document1} class="swipebox" >
                            <img src={document1} alt="image1" style={{ border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px' }} width="400px" class="img-responsive"/>
                        </a>
                        <a href={document2} class="swipebox" >
                            <img src={document2} alt="image2" style={{ border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px' }} width="400px" class="img-responsive"/>
                        </a>
                        <a href={document3} class="swipebox" >
                            <img src={document3} alt="image3" style={{ border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px' }} width="400px" class="img-responsive"/>
                        </a>
                        <a href={document4} className="swipebox">
                            <img src={document4} alt="image3"
                                 style={{border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px'}}
                                 width="400px" className="img-responsive"/>
                        </a>
                        <a href={document5} className="swipebox">
                            <img src={document5} alt="image3"
                                 style={{border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px'}}
                                 width="400px" className="img-responsive"/>
                        </a>
                        <a href={document6} className="swipebox">
                            <img src={document6} alt="image3"
                                 style={{border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px'}}
                                 width="400px" className="img-responsive"/>
                        </a>
                        <a href={document7} className="swipebox">
                            <img src={document7} alt="image3"
                                 style={{border: '3px solid #167CE9', borderRadius: '8px', margin: '10px 20px'}}
                                 width="400px" className="img-responsive"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}  
