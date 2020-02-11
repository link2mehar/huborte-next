
import styled from 'styled-components';


const ProductInner = styled.div`
    box-sizing:border-box;
    width: calc(1/5*100% - (1 - 1/5)*20px);
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin-bottom:20px;
    background: #fafafa;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 768px) {
    width: 100%;
  }

    

`
const ImgContainer = styled.div`
    width:100%;
    box-sizing:border-box;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background: #f0f0f0;
    span{
        position: absolute;
        top: 0;
        right: 0px;
        background-color: #7da0fe;
        padding: 6px;
        color: #fff;
    }
    &:hover img {
        transform:scale(1.1);
    }

    img{
        width:100%;
        object-fit:contain;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
`
const ProductDetails = styled.div`
    padding:15px;
    background-color:#fff;
    span{
        display: block;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: #ccc;
        margin-bottom: 6px;
    }
    h4{
        margin:0;
        &:hover{
            color:#7DA0FE;
        }
    }
    a{
        font-weight: 500;
        display: block;
        margin-bottom: 6px;
        text-transform: uppercase;
        color: #363636;
        text-decoration: none;
        transition: 0.3s;
    }
    p{
        font-size: 15px;
        line-height: 22px;
        margin: 6px 0;
        color: #999;
    }
`
const ProductBottom =styled.div`
display:flex;
justify-content:space-between;

padding-top: 10px;
`




const Featured = (props) => {




    
    return(
        <div>
            <div className="container d-flex carousel-head" >
                <h3>{props.heading}</h3>
                
            </div>
            <div className="d-flex mobile" style={{justifyContent:'space-evenly',marginTop:'25px',flexWrap:'wrap'}}>
                

                    {/* <Items category ={props.cat} /> */}
                    {/* <ProductInner>
                        <ImgContainer>
                            <img src="/laptop.png" alt=""/>
                            <span className="float-price">$154</span>
                        </ImgContainer>
                        <ProductDetails>
                            
                            <h4>Anker 10400 mAh PowerCore</h4>
                            <p  className="description"> some special description</p>
                      
                        </ProductDetails>
                    </ProductInner> */}
                  
                    
                    
                    
                    

            </div>
        </div>
    )
}
export default Featured;