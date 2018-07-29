import React from 'react';
import styled from 'styled-components';

// grid - template - columns: repeat(3, 1fr);


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
`;

const PhotoGrid = ({ children }) => {
    return (
        <GridContainer>
            {children}
        </GridContainer>
    );
}

export default PhotoGrid;