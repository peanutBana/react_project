import React from 'react';
import styled, {css} from 'styled-component'

const Box = styled.div`
    background:${props => props.color || 'blue'}
    padding: 1rem;
    display: flex;
    width: 100px;
    height: 100px;
`;

const Button = styled.button`

`;

const StytledComponent = () => {
    <Box color='black'></Box>;
}

export default StytledComponent;
