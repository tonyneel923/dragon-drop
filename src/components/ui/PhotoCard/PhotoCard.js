import React from 'react';
import styled from 'styled-components';

const Photo = styled.div`
    background-image: ${props => `url(${props.src})`};
    width: 200px;
    height: 150px;
    display: flex;
    align-items: flex-end;
`;

const TitleArea = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    max-height: 20%;
    height: 50px;
    overflow: hidden;
    width: 100%;
`;

const Title = styled.div`
    color: white;
    font-size: 12px;
`;

const PhotoCard = ({ photoInfo, onDrag }) => {
    return (
        <Photo src={photoInfo.get('url')} >
            <TitleArea>
                <Title>{photoInfo.get('title')}</Title>
            </TitleArea>
        </Photo>
    );
}

export default PhotoCard;