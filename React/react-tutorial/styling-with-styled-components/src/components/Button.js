import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished'

/* 색상 */
const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)}
            }
            &:active {
                background: ${darken(0.1, selected)}
            }
            ${props => props.outline && css`
                color: ${selected};
                background: none;
                border: 1px solid ${selected};
                &:hover {
                    background: ${selected};
                    color: white;
                }
            `}
        `
    }}
`

/* 크기 */ 
const sizes = {
    large: {
      height: '3rem',
      fontSize: '1.25rem'
    },
    medium: {
      height: '2.25rem',
      fontSize: '1rem'
    },
    small: {
      height: '1.75rem',
      fontSize: '0.875rem'
    }
  };
  
const sizeStyles = css`
    /* 크기 */
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`


// const sizeStyles = css`
//     ${props => 
//         props.size === 'large' &&
//         css`
//             height: 3rem;
//             font-size: 1.25rem;
//         ` 
//     }

//     ${props => 
//         props.size === 'medium' &&
//         css`
//             height: 2.25rem;
//             font-size: 1rem;
//         ` 
//     }
    

//     ${props => 
//         props.size === 'small' &&
//         css`
//             height: 1.75rem;
//             font-size: 0.875rem;
//         ` 
//     }
    
// `

const fullWidthStyle = css`
    ${ props => props.fullWidth && css`
        width: 100%;
        justify-content: center;
        & + & {
            margin-left: 0;
            margin-top: 1rem;
        }
    `}
`

const StyledButton = styled.button`
    /* 공통 style */
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    height: 2.25rem;
    font-size: 1rem;
    

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
    
    /* 색상 */
    ${colorStyles}

    /* 크기 */
    ${sizeStyles}
    ${fullWidthStyle}


`

function Button({ children, color, size, outline, fullWidth, ...rest }) {
    return (
        <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest} >
            {children}
        </StyledButton>
    )
}


Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default Button