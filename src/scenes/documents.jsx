import React from 'react'
import document1 from '../images/document1.jpeg'
import document2 from '../images/document2.jpeg'
import document3 from '../images/document3.jpg'

export default class DocumentScene extends React.Component {
    render() {
        return(
            <div style={{ backgroundColor: '#fff'}}>
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
                    </div>
                </div>
            </div>
        )
    }
}  
