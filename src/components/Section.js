import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Section({ title, description, backgroundImg, leftBtnText, rightBtnText, middleBtnText, range, mph, speed, power }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <Fade>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Fade>
            </ItemText>
            <Buttons>
                <Fade bottom>
                    <DetailGroup>
                        {leftBtnText &&
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                        }
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                        {range &&
                            <ModelDetail>
                                <Spec>
                                    <h1>{range}</h1>
                                    <p>Range (EPA est.)</p>
                                </Spec>
                                <Spec>
                                    <h1>{mph}</h1>
                                    <p>0-60 mph*</p>
                                </Spec>
                                <Spec>
                                    <h1>{speed}</h1>
                                    <p>Top Speed</p>
                                </Spec>
                                <Spec>
                                    <h1>{power}</h1>
                                    <p>Peak Power</p>
                                </Spec>
                            </ModelDetail>
                        }
                    </DetailGroup>
                    <ButtonGroup>
                        {middleBtnText &&
                            <ModelDetail>
                                <MiddleButton>
                                    {middleBtnText}
                                </MiddleButton>
                            </ModelDetail>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src='https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png' />
            </Buttons>
        </Wrap >
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image: ${props => `url('${props.bgImage}')`}
`
const ItemText = styled.div`
    padding-top: 20vh;
    text-align: center;
`
const ModelDetail = styled.div`
    display: flex;
`

const Spec = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 40px;

    h1 {
        color: white;
        font-weight: 10;
    }

    p {
        font-size: 14px;
        color: white;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const DetailGroup = styled.div`
    display: flex;
    padding-bottom: 2vh;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    padding-bottom: 2vh;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`

const MiddleButton = styled(LeftButton)`
    width: 180px;   
    background-color: white;
    font-weight: 10;
    color: #393c41;
    border-width: 4px;
    border-style: solid;
    border-color: white;
`

const DownArrow = styled.img`
    height: 30px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    margin-bottom: 20px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
`
