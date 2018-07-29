import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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