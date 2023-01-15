import React from 'react';
import styled from 'styled-components';
import arrow from './../img/arrow.png'
import cv from './../pdf/cv.pdf'

const ContactMe = () => {
    return ( 
        <Container id='contact'>
            <BoxOne>
                <Title>Work<strong>with me</strong></Title>
                <Paragraph>
                    Thank you for coming this far. If you think I can participate in your projects, don't hesitate to contact me.
                </Paragraph>
            </BoxOne>

            <BoxTwo>
                <ContainerArrow>    
                    <Image src={arrow} />
                </ContainerArrow>
                
                <div>
                    <Text>LINKEDIN: <a href='https://www.linkedin.com/in/franco-viola-/' target='_blank'>FRANCO VIOLA</a> </Text>
                    <Text>PHONE: <a>+54 3564-413771</a> </Text>
                    <Text>MAIL: <a href="mailto:francovideoeditor@gmail.com" target='_blank'>FRANCOVIDEOEDITOR@GMAIL.COM</a>  </Text>
                </div>
            </BoxTwo>
        </Container>
    );
}

const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 1.5em;

    @media (max-width: 950px) {
        flex-direction: column;
    }
`

const BoxOne = styled.div`
    width: 35%;

    @media (max-width: 680px) {
        width: 85%;
        margin: auto;
    }

    @media (max-width: 950px) {
        width: 95%;
    }
`

const Title = styled.h2`
    font-size: 3.2em;  

    & > strong{
        color: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 680px) {
        font-size: 2.5em; 
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 1.7em; 
        text-align: center;
        margin-left: .6em;
    }
`

const Paragraph = styled.p`
    width: 85%;
    font-size: 2em;

    @media (max-width: 680px) {
        width: 100%;
        font-size: 1.2em;
        text-align: center;
    }
`


const Image = styled.img`
    width: 100%;
`

const BoxTwo = styled.div`
    margin-top: 5em;
    display: flex;
    justify-content: space-around;

    @media (max-width: 680px) {
        text-align: center;
        margin: auto;
    }

    @media (max-width: 480px) {
        width: 90vw;
        margin-left: -4em;
        
    }

`

const ContainerArrow = styled.div`
    margin-left: 5em;
    margin-right: 5em;
    width: 18%;

    @media (max-width: 720px) {
        display: none;
    }
`

const Text = styled.h3`
    font-size: 1.6em;

    & > a{
        text-decoration: none;
        color: ${({theme}) => theme.TextSecondary};
        transition: all 0.5s ease-in;

        &:hover{
            color: #b54d09;
            text-decoration: underline;
        }
    }

    @media (max-width: 480px) {
        font-size: 1.2em;
        margin-left: 3em;
    }

`

export default ContactMe;