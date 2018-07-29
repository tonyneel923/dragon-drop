import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Photo = styled.img`
    width: 200px;
    height: 150px;
`;

const TitleArea = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    max-height: 20%;
    height: 50px;
    overflow: hidden;
    width: 200px;
    position: absolute;
`;

const Title = styled.div`
    color: white;
    font-size: 12px;
`;

const PhotoCard = ({ photoInfo, onDrag }) => {
    return (
        <Container>
            <Photo src={photoInfo.get('url')} />
            <TitleArea>
                <Title>{photoInfo.get('title')}</Title>
            </TitleArea>
        </Container>
    );
}

export default PhotoCard;