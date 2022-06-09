import React from 'react';
import styled from 'styled-components';
import { MarginDiv } from '../../../../components/common-styles';
import { Navbar } from '../../../../components/navbar/Navbar';
import { DisplayPet } from '../displaypet/DisplayPet';

const AboutContainer = styled.div`
    padding: 100px 150px;
`;

const AboutMeP = styled.p`
    margin: 10px;
    font-family: 'Signika Negative';
    font-size: 16px;
`;

const DisplayPetLeft = styled.div`
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    max-width: 300px;
`;

const CorrectHR = styled.hr`
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid rgba(0, 0, 0 70%);
    width: 100%;
    margin-bottom: 0;
`;

const PetUL = styled.ul`
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const PetULContainer = styled.div`
    columns: 3;
    column-gap: 50px;
    padding: 0 100px;
    text-align: center;
`;

const PetsTitle = styled.h1`
    font-family: 'Josefin Sans';
    text-align: center;
    margin: 30px 0;
    font-size: 40px;
`;

export function About() {
    const nate = {
        title: 'Nate',
        description: 'Coding, gym, and music enthusiast',
        url: '/me.jpg',
    };

    const myPets = [
        {
            title: 'Zoe',
            description: 'Pillow enthusiast - also enjoys human food and head pats',
            url: '/zoe.jpg',
        },
        {
            title: 'Maddie',
            description: "The only cat I've ever seen who plays fetch",
            url: '/maddie.jpg',
        },
        {
            title: 'Pandi',
            description: "Zoe's smarter sister, actually comes when called",
            url: '/pandi.jpg',
        },
    ];

    return (
        <div>
            <Navbar></Navbar>
            <MarginDiv>
                <AboutContainer>
                    <div>
                        <DisplayPetLeft>
                            <DisplayPet pet={nate}></DisplayPet>
                        </DisplayPetLeft>
                        <AboutMeP>
                            Hello! I’m Nathan Mintos, a determined and resourceful autodidact pursuing a double major in
                            Computer Science and Linguistics and a minor in Philosophy in the Rutgers University SAS
                            Honors Program. I have a strong passion for computers, language, logic, and above all
                            learning. Nothing is more important to me than learning from others and teaching myself, and
                            making an effort to use what I learn to educate others. I am fully fluent (reading as well
                            as writing) in Hebrew, as well as English. When I'm not coding or pursuing my academic
                            passions, I can probably be found at the gym, where my current personal records include a
                            380lb deadlift, 325lb squat, and 230lb bench press, or listening to music.
                        </AboutMeP>
                        <AboutMeP>
                            In 9th grade I taught myself to code in Java, and since then I’ve accumulated significant
                            experience with full-stack development, data science, and computer hardware, with 5 years of
                            experience working remotely and in-person during my summers for Flip.to, a Florida-based
                            hospitality marketing startup. As part of the 8-member development team, I gained
                            comprehensive expertise with Javascript and its various libraries, as well as mature
                            collaboration skills from interactions with my knowledgeable senior colleagues, and specific
                            development experience within the Ad Tech space. Throughout my tenure at Flip.to, I used my
                            self-starting skills extensively to research new technologies for inclusion in the codebase,
                            which in turn helped me to create thorough documentation for use in training. I’ve never
                            been scared of asking questions, and quickly learned advanced troubleshooting and bug fixing
                            skills through the help of my teammates. At all times I worked closely with my colleagues in
                            the development team, the creative/design team, the account executives, and the
                            administration, in order to ensure that my projects were perfectly in-line with the evolving
                            nature of the company’s needs.
                        </AboutMeP>
                        <AboutMeP>
                            I am extremely excited for this opportunity to apply my previous experience to this new
                            context at Eulerity, and I highly appreciate you and the entire Eulerity team for taking the
                            time to consider my application. Please don't hesitate to contact me at the following:
                        </AboutMeP>
                        <AboutMeP>
                            <a href='mailto:nate.blum13@gmail.com'>nate.blum13@gmail.com</a> |{' '}
                            <a href='tel:5512276667'>551-227-6667</a>
                        </AboutMeP>
                    </div>

                    <CorrectHR></CorrectHR>
                    <PetsTitle>My Pets</PetsTitle>

                    <PetULContainer>
                        <PetUL>
                            {myPets.map((pet: DisplayPetObj, i: number) => (
                                <DisplayPet key={i} pet={pet} />
                            ))}
                        </PetUL>
                    </PetULContainer>
                </AboutContainer>
            </MarginDiv>
        </div>
    );
}

export interface DisplayPetObj {
    title: string;
    description: string;
    url: string;
}
