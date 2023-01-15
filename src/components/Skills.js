import React from 'react';
import styled from 'styled-components';

import filmora from './../img/Skills/filmora.png';
import canva from './../img/Skills/canva.png';
import youtube from './../img/Skills/youtube.png';
import premier from './../img/Skills/premier.png';
import español from './../img/Skills/español.png';
import ingles from './../img/Skills/ingles.png';

const Skills = () => {
    return ( 
        <Container id='skills'>
            <BoxOne>
                <Title>My<strong>Skills</strong></Title>
            </BoxOne>

            <BoxTwo>
                <SkillsOne>
                    <Skill>
                        <Image src={filmora} />
                        <Text>Wondershare Filmora</Text>
                    </Skill>
                    <Skill>
                        <Image src={canva} />
                        <Text>Canva</Text>
                    </Skill>
                    <Skill>
                        <Image src={youtube} />
                        <Text>SEO Youtube</Text>
                    </Skill>
                    <Skill>
                        <Image src={premier} />
                        <Text>Adobe Premiere Pro</Text>
                    </Skill>
                    <Skill>
                        <Image src={ingles} />
                        <Text>English</Text>
                    </Skill>
                    <Skill>
                        <Image src={español} />
                        <Text>Español</Text>
                    </Skill>
                </SkillsOne>
            </BoxTwo>
        </Container>
    );
}

const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 8em;
    margin-left: 1.5em;

    @media (max-width: 680px) {
        margin-left: -3em;
    }
`

const BoxOne = styled.div`
    max-width: 850px;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {

    }
`

const BoxTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 80%;

    @media (max-width: 800px) {
        min-width: 100vw;
    }
`

const Title = styled.h2`
    font-size: 3.2em;  

    & > strong{
        color: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 680px) {
        font-size: 2.5em; 
        margin-left: 0.4em;
        margin-bottom: -1em;
    }
`

const Skill = styled.div`
    background-color: rgb(0, 124, 219, 0.1);
    border-radius: 10%;
    width: 13em;
    margin-left: 1em;
    margin-top: 0;
    text-align: center;

    @media (max-width: 680px) {
        margin-top: 0;
        text-align: center;
        padding: 0;
        width: 8rem;
        margin: 0;
    }
`

const Image = styled.img`
    width: 7em;
    padding-bottom: 0;

    @media (max-width: 680px) {
        width: 5em;
        margin-left: 0.7em;
        margin-top: 0;
        text-align: center;
    }
`

const Text = styled.h3`
    padding-top: 0;
`
 
const SkillsOne = styled.div`
    display: flex;

    @media (max-width: 800px) {
       flex-wrap: wrap;
       gap: .5em;
    }
`

const SkillsTwo = styled.div`
    display: flex;
`
export default Skills;