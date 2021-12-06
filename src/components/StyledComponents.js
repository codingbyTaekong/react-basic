import React, { Children } from "react";
import styled, {css} from "styled-components";
import { darken, lighten } from "polished";

const Circle = styled.div`
    width:5rem;
    height:5rem;
    background: ${props => props.color};
    border-radius:50%;
    ${props => props.huge && 
        css`
            width : 10rem;
            height : 10rem;
        `
    }
`

const colorStyles = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
        `;
    }}
`;
const sizes = {
    large : {
        height : '3rem',
        fontSize : '1.25rem'
    },
    medium : {
        height : '2.25rem',
        fontSize : '1rem'
    },
    small : {
        height : '1.75rem',
        fontSize : '0.875rem'
    }

}
const sizeStyles = css`
    ${({size})=> css`
        height : ${sizes[size].height};
        font-size : ${sizes[size].fontSize}
    `}
`;



const StyledButton = styled.button`
    /* 공통스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;

    & + & {
        margin-left: 1rem;
    }

    ${colorStyles}
    ${sizeStyles}
`;


function StyledComponents({children, color, size, ...rest}) {

    return(
    <>
        {/* <Circle color="blue" huge/> */}
        <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
    </>
    
    );
}

StyledComponents.defaultProps = {
    color : 'blue',
    size : 'medium'
}

export default StyledComponents;