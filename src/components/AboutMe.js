import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import personalImage from './../img/personalPhoto.jpeg'

const Main = () => {
    return (
        <Container id='aboutMe'>
            <BoxOne>
                <Title><strong>Video</strong>editor</Title>
                <Paragraph>
                    Hi, I'm Franco! Besides being passionate about programming, I'm a video editor, 
                    I have two years of experience editing videos for my own <a href='https://www.youtube.com/channel/UCRGyNBY4_HPl8c4FC_ANkOQ' target="_blank" title='Ir al canal de Youtube'>YouTube channel</a>. My main 
                    working tool is Wondershare Filmora, but I'm learning to use Adobe After 
                    Effects.
                </Paragraph>
            </BoxOne>

            <BoxTwo>
                <Image src={personalImage} />
            </BoxTwo>
        </Container>
    );
}

const Container = styled.div`
    color: ${({ theme }) => theme.TextPrimary};
    display: flex;
    justify-content: space-between;
    padding-top: 5em;

    @media (max-width: 768px) {
        padding-top: 2em;
    }

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding-top: 0;
    }
`

const BoxOne = styled.div`
    max-width: 850px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 0;
    }
`

const BoxTwo = styled.div`
    @media (max-width: 480px) {
        text-align: center;
        margin-top: 2em;
        margin-bottom: -2rem;
    }
`

const Title = styled.h1`
    font-size: 4em;
    text-transform: uppercase;

    & > strong{
        color: ${({ theme }) => theme.TextSecondary};
        text-shadow: 0 0 40px ${({ theme }) => theme.TextSecondaryMinor};
        font-size: 3.5rem;
    }

    @media (max-width: 768px) {
        font-size: 3.5em;
    }

    @media (max-width: 480px) {
        width: 100vw;
        font-size: 2.5em;
        margin-left: -0.9em;
    }
`

const Paragraph = styled.p`
    font-size: 1.8em;
    width: 90%;
    padding-left: 1.1em;
    margin-bottom: 2em;

    & > a {
        color: ${({ theme }) => theme.TextSecondary} !important;
        text-decoration: underline;
        padding: 0;
        transition: all ease 200ms;

        &:hover{
            color: #a14205 !important;
        }
    }
    @media (max-width: 768px) {
        font-size: 1.4em;
        width: 85%;
        padding-left: 1.35em;
    }

    @media (max-width: 480px) {
        width: 90vw;
        font-size: 1.2em;
        padding-top: 0;
        padding-left: 0.7em;
    }
`

const Button = styled.a`
    text-decoration: none;
    font-size: 1.6em;
    margin-left: 1.4em;
    padding: 0.8em 3em;
    background-color: ${({ theme }) => theme.TextSecondary};
    text-shadow: 0 0 40px ${({ theme }) => theme.TextSecondaryMinor};
    color: #ffffff;
    transition: all ease-in .3s;

    &:hover{
        background-color: #a14205;
    }

    @media (max-width: 480px) {
        font-size: 1.4em;
        padding: .3em .7em;
        margin-left: 2.2em;
    }

`

const rotate = keyframes`
    0% { transform: translateY(-5px); }
    100% { transform: translateY(-18px); }
`;

const Image = styled.img`
    width: 60%;
    border-radius: 50%;
    margin-top: 3em;
    margin-left: 4rem;
    border: none;
    padding: 0;
    animation: 2.5s ${rotate} alternate infinite;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }

`

export default Main;