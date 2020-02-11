import styled from 'styled-components'




export const NAV = styled.nav`
        background-color:#7DA0FE;
        ul{
            margin:0;
            padding:0;
            list-style:none;
            display:flex;
            li{


                a{
                    display: block;
                    color: #e0e0e0;
                    text-align: center;
                    padding: 14px 20px 14px 0;
                    text-decoration: none;
                    font-size: 17px;
                    &:hover{
                        color:#fff;
                    }
                }
            }
        }
        @media (max-width:768px){
            padding: 8px 15px;
        }
        
    `
