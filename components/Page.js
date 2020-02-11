import React,{Fragment} from 'react';
import styled,{ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Meta from './Meta';
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }
`




const Page = props => {
    //console.log(props)
    const theme = {
        primary:'#231d1d',
        black:'#000',
        grey:'#3A3A3A',
        offwhite:'#E1E1E1',
        maxWidth:'1350px'
    }
    const Inner = styled.div`
    
        max-width: ${props => props.theme.maxWidth};
        margin:25px auto;
    
    `

    return(
        <Fragment>
            <GlobalStyle />
            <Meta />
            <ThemeProvider theme={theme}>
                
                <Header />
                <Inner>    
                    {props.children}
                </Inner>
                <Footer />
            </ThemeProvider>
            
        </Fragment>
    )
    


}

export default Page
