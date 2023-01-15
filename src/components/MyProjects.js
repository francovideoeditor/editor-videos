import React from 'react';
import styled from 'styled-components';
import ListaDeGastos from './../img/Projects/ListaGastos.PNG';
import FyloPage from './../img/Projects/FyloPage.PNG';
import ToDoList from './../img/Projects/ToDoList-React.PNG';
import Remix from './../img/Projects/Remix.PNG';
import Weather from './../img/Projects/Weather.PNG';
import RickAndMorty from './../img/Projects/rickAndMorty.PNG';

const MyProjects = () => {
    return (
        <Container id='projects'>
            <BoxOne>
                <Title>My<strong>Projects</strong></Title>
                <Paragraph>Below are some demo videos as an example of what I can do. I will also leave my <a href='https://www.youtube.com/channel/UCRGyNBY4_HPl8c4FC_ANkOQ' title='Ir al canal de Youtube'>YouTube channel</a> (<a href='https://www.youtube.com/channel/UC441P1TNmajMZwpSO0t8Mxg' title='Ir al canal de Youtube'>My other YouTube channel</a>) so you can see the format of the videos I edit for myself.</Paragraph>
            </BoxOne>

            <BoxTwo>
                <ContainerCard>
                    <h2>My's Youtube channel videos</h2>

                    <shorts>
                        <iframe width="352" height="626" src="https://www.youtube.com/embed/60_4qQZqVTs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="352" height="626" src="https://www.youtube.com/embed/hIq1VjZr8T8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="352" height="626" src="https://www.youtube.com/embed/63KFYXxI27Y" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="352" height="626" src="https://www.youtube.com/embed/KpHCW2H6Jto" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </shorts>

                    <videos>
                        <iframe width="956" height="430" src="https://www.youtube.com/embed/M4xIZUgBUCk" title="Actores turcos que fallecieron 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="956" height="430" src="https://www.youtube.com/embed/c-nUBtWmwHk" title="Así es la lujosa vida de la Dra. Nazli en 2022 (Sinem Ünsal)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </videos>
                </ContainerCard>

                <ContainerCard>
                    <h2>Demo videos</h2>


                </ContainerCard>
            </BoxTwo>
        </Container>
    );
}

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1500px;
    width: 95vw;

    & > h2{
        font-size: 35px;
        text-align: start;
        text-decoration: underline ${({theme}) => theme.TextSecondary};
    }
    & > shorts {
        display: flex;
        min-width: 1500px;
        gap: 0.7rem;

        @media (max-width: 900px) {
            flex-direction: column;
            min-width: fit-content;
            margin: auto;
        }

    }

    & > videos {
        display: flex;
        width: 95vw;

        @media (max-width: 900px) {
            flex-direction: column;
            min-width: fit-content;
        }
    }

    & > h2 {

    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        min-width: fit-content;
        width: 100vw;
    }
`

const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > iframe {
        max-height: 419px;
    }

    @media (max-width: 680px) {
    }
`

const BoxOne = styled.div`
    text-align: center;
    
    @media (max-width: 680px) {
    }
`
const Title = styled.h2`
    font-size: 5em;  

    & > strong{
        color: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 680px) {
        font-size: 2.5em; 
    }
`

const Paragraph = styled.p`
    margin: auto;
    width: 90%;
    font-size: 1.7em;
    margin-top: 0;

    & > a {
        color: ${({ theme }) => theme.TextSecondary} !important;
        text-decoration: underline;
        padding: 0;
        transition: all ease 200ms;

        &:hover{
            color: #a14205 !important;
        }
    }

    @media (max-width: 680px) {
        min-width: 90vw;
        font-size: 1.2em;
    }
`

const BoxTwo = styled.div`
    text-align: center;

    @media (max-width: 680px) {

    }
`

const Button = styled.button`
    margin-top: 1em;
    margin-bottom: 1.2em;
    margin-left: .3em;
    margin-right: .3em;
    cursor: pointer;
    padding: 0.8em;
    border: none;
    border-radius: 15px;
    background-color: ${({theme}) => theme.TextSecondary};
    background-image: linear-gradient(#004d87, #004d87);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;
    animation: all 1s;
    transition: background-size 500ms;
    font-family: 'Poppins', sans-serif;

    &:hover{
        background-size: 100% 100%;
        background-position-x: left;
    }

    & > a{
        text-decoration: none;
        color: white;
    }
`
 
export default MyProjects;