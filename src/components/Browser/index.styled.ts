import styled from "styled-components";

export const bgColor = 'rgba(31, 27, 27, 0.713)'
export const tColor = 'rgb(230, 217, 217)'
export const borderB = '1px solid rgba(31, 27, 27, 0.713)'
export const mediaScr = '@media screen and (max-width: 690px) {display: none;}'

export const WrapperBrowser = styled.div`
    max-width: 100vw;
    padding: 1em 1em 0 1em;
`

export const BPreloading = styled.div<{preloading: boolean}>`
    display: ${({preloading}) => preloading ? 'none' : 'block' };
    top: 63px;
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: black;
    z-index: 188;
    transtition: 1s;
`

export const BContainer = styled.div<{browserWidth: boolean}>`
    ${props => !props.browserWidth ? "width: 70vw;" : "max-width: 1300px;"};
    max-width: 1300px;
    min-height: 70vh;
    z-index: 1;
    @media screen and (max-width: 750px) {
        width: 100%;
        max-width: 1300px;
    }
`
export const HeaderBrow = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #bbbbbb;
    max-height: 50vh;
`
export const ContentBrow = styled.div`
    transition: 0.3s;
    width: 100%;
    height: 70vh;
    background-color: #bbbbbb;

`
export const Content = styled.div`
    max-height: 100%;
    overflow-y: auto; 
`