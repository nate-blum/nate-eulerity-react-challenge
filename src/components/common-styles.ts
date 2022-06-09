import styled from 'styled-components';

export const MarginDiv = styled.div`
    margin-top: 50px;
`;

export const PetBackground = styled.div`
    background-color: #f8bbd0;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    left: 10px;
    top: 10px;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
`;

export const PetTextContainer = styled.div`
    padding: 0 25px 25px 25px;
    z-index: 2;
    position: relative;
`;

export const PetImage = styled.img`
    width: 100%;
    border-radius: 10px;
    display: inline;
    z-index: 2;
    position: relative;
`;

export const PetTitle = styled.p`
    margin-top: 20px;
    margin-bottom: 0;
    font-family: 'Josefin Sans';
    font-weight: 300;
    font-size: 40px;
`;

export const PetDescription = styled.p`
    font-family: 'Signika Negative';
    margin-top: 10px;
    margin-bottom: 0;
`;
