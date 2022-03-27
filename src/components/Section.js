import React from 'react'
import styled  from 'styled-components'
import { Fade } from "react-awesome-reveal"

function Section(props) {
    console.log(props);
  return (
    <Wrap bgImg={props.backgroundImg} className="bg">
        <Fade up delay={300}>
          <ItemText>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
          </ItemText>
        </Fade>
        <Fade up delay={500}>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                   {props.leftBtnText}
                </LeftButton>
                {props.rightBtnText && 
                <RightButton>
                   {props.rightBtnText}
                </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/img/down-arrow.svg" />
        </Buttons>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/img/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/img/${props.bgImg}")`}
`
const ItemText = styled.div`
    padding-top: 15vh;
    
    text-align: center;
    z-index: -1;
`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px) {
       flex-direction: column;
   }
`

const LeftButton = styled.div`
   background-color: #beb9cc;
   color: dcdad7;
   height: 40px;
   width: 256px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin: 7px;
`

const RightButton = styled(LeftButton)`
   opacity: 0.65;
   color: #43494C;
`

const DownArrow = styled.img`
   margin-top: 20px;
   height: 40px;
   width: 40px;
   overflow-x: hidden;
   animation: animateDown infinte 1.5s;
   cursor: pointer;
`

const Buttons = styled.div``