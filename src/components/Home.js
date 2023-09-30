import React from 'react'
import styled from 'styled-components';
import Section from './Section';


function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop'
                leftBtnText='Custom Order'
                rightBtnText='Existing inventory'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70'
                leftBtnText='Custom Order'
                rightBtnText='Existing inventory'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D'
                leftBtnText='Custom Order'
                rightBtnText='Existing inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D'
                leftBtnText='Custom Order'
                rightBtnText='Existing inventory'
            />
            <Section
                title='Solar Panels'
                description='Lowest Cost Solar Panels in America'
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D'
                leftBtnText='Order Now'
                rightBtnText='Learn More'
            />
            <Section
                title='Solar Roofs'
                description='
Produce Clean Energy From Your Roof'
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D'
                leftBtnText='Order Now'
                rightBtnText='Learn More'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories'
                leftBtnText='Shop Now'
                rightBtnText=''
            />
        </Container >
    )
}

export default Home

const Container = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    max-height: 100vh;
`

