import styled from 'styled-components'

const Trianglebg1 = styled.div`
    background-color: #344f40;
    transform: rotate(-30deg);
    height: 50vh;
    width: 100vw;
    position: fixed;
    top: -25vh;
    left: 0vh;
`
const Trianglebg = styled.div`
    background-color: black;

    .trapezoid {
        position: fixed;
        top: 0;
        left: 0;
        border-left: 130vw solid red;
        // border-left: 25px solid transparent;
        border-bottom: 30vh solid transparent;
        height: 0;
        width: 10vw;
    }
`
const Rectanglebg = styled.div`
    background-color: #344f40;
    height: 100vh;
    width: 15vw;
    position: fixed;
    top: 0;
    left: 0;
`


export const Triangle = props => <Trianglebg >{props.children}<div className="trapezoid"></div></Trianglebg>