import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Fade from 'react-reveal/Fade';
import Header from './Header';

function Model({ model }) {

    var description = '';
    var backgroundImg = '';
    var range = '';
    var speed = '';
    var mph = '';
    var power = '';

    switch (model) {
        case 'Model S':
            description = 'From $71,090*'
            backgroundImg = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop'
            range = '396 mi'
            speed = '1.99 s'
            mph = '200 mph'
            power = '1,020 hp'
            break;
        case 'Model 3':
            description = 'From $29,740*'
            backgroundImg = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D'
            range = '333 mi'
            speed = '3.1 s'
            mph = '200 mph'
            power = '1,020 hp'
            break;
        case 'Model X':
            description = 'From $68,590*'
            backgroundImg = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D'
            range = '333 mi'
            speed = '2.5 s'
            mph = '200 mph'
            power = '1,020 hp'
            break;
        case 'Model Y':
            description = 'From $39,390*'
            backgroundImg = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70'
            range = '330 mi'
            speed = '3.5 s'
            mph = '155 mph'
            power = '1,020 hp'
            break;
        default:
            break;
    }

    return (
        <Container>
            <Header />
            <Section
                title={model}
                description={description}
                backgroundImg={backgroundImg}
                middleBtnText='order now'
                range={range}
                speed={speed}
                mph={mph}
                power={power}
            />
            <Specification>
                <ItemText>
                    <Fade bottom>
                        <h1>All-New Interior</h1>
                    </Fade>
                </ItemText>
            </Specification>
            <FeatureAll>
                <Fade bottom>
                    <Feature>
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9865e92b-731c-4f1a-9430-e984ee0001ca/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop" alt=""></img>
                        <FeatureText>
                            <h2>Game from anywhere</h2>
                            <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles.Wireless controller compatibility lets you game from any seat.</p>
                        </FeatureText>
                    </Feature>
                </Fade>
                <Fade bottom>
                    <Feature>
                        <FeatureText>
                            <h2>Stay Connected</h2>
                            <p>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.</p>
                        </FeatureText>
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop" alt=""></img>
                    </Feature>
                </Fade>
                <Fade bottom>
                    <Feature>
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop" alt=""></img>
                        <FeatureText>
                            <h2>Your Best Audio System</h2>
                            <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.</p>
                        </FeatureText>
                    </Feature>
                </Fade>
                <Fade bottom>
                    <Feature>
                        <FeatureText>
                            <h2>Real Storage</h2>
                            <p>With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.</p>
                        </FeatureText>
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop" alt=""></img>
                    </Feature>
                </Fade>
            </FeatureAll>
            <Section
                title=''
                description=''
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop'
                range='396 mi'
                speed='1.99 s'
                mph='200 mph'
                power='1,020 hp'
                middleBtnText=''
            />
            <Fade bottom>
                <BeyondDetail>
                    <Beyond>
                        <p>Plaid</p>
                        <h1>Beyond Ludicrous</h1>
                        <Button>
                            order now
                        </Button>
                    </Beyond>
                    <p>With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. All Model S powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</p>
                </BeyondDetail>
            </Fade>
            <PowerTrain>
                <h1>Electric Powertrain</h1>
                <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
                <img src='https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop' alt='' />
                <Card>
                    {/** 
                    <h1>Model S</h1>
                    <p>Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.</p>
                    */}
                </Card>
            </PowerTrain>
        </Container >


    )
}

export default Model

const Container = styled.div`
    height: 100vh;

`

const Button = styled.div`
    height: 40px;
    width: 180px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;        
    background-color: transparent;
    border-width: 4px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
`

const Specification = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop');
    
`
const ItemText = styled.div`
    padding-top: 8vh;
    text-align: center;
    
    h1 {
        color: white;
        font-weight: 10;
    }
`
const FeatureAll = styled.div`
    padding: 40px 0;
    background-color: black;
`
const Feature = styled.div`
    display: flex;
    background-color: black;
    justify-content: center;
    padding: 0 100px;

    img {
        height: 300px;
        @media(max-width: 1000px) {
        display: none;
    }
    }
`

const FeatureText = styled.div`
    padding-top: 80px;
    padding-left: 60px;
    padding-right: 60px;
    text-align: left;
    
    h2 {
        color: white;
    }

    p {
        padding-top: 20px;
        color: white;
        font-weight: 100;
    }

`

const BeyondDetail = styled.div`
    display: flex;
    padding: 40px 150px;
    padding-bottom: 80px;
    align-items: center;

    p {
        padding-left: 50px;
    }
`
const Beyond = styled.div`
    width: 80vw;
    text-align: left;
    
    h2 {
        color: black;
    }

    p {
        padding: 0;
        color: black;
        font-weight: 100;
    }
`

const PowerTrain = styled.div`
    background-color: #ececec;
    padding: 40px 150px;
    height: 700px;
    
    h1 {
        padding: 0 120px;
        color: black;
        font-weight: 10;
    }

    p {
        padding: 20px 120px;
        color: black;
        font-weight: 100;
    }

    img {
        padding-top: 30px;
        justify-content: center;
        align-items: center;
        height: 440px;
        width: 76vw;

        @media (max-width: 1000px) {
            display: none;
        }

    }
`
const Card = styled.div`
    display: flex;
    padding: 40px 150px;
    jusity-content: center;
    align-items: center;
`