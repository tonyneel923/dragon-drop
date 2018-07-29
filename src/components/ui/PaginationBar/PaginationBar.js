import React from 'react';
import RightArrow from 'react-icons/lib/fa/arrow-right';
import LeftArrow from 'react-icons/lib/fa/arrow-left';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 25px 0;
`;

const Label = styled.span`

`;

const PaginationBar = ({ forwardAction, backwardAction, page }) => {
    return (
        <Container>
            <LeftArrow onClick={backwardAction} />
            <Label>{page}</Label>
            <RightArrow onClick={forwardAction} />
        </Container>
    );
}

export default PaginationBar;