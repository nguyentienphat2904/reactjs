import React from "react";
import Button from '@atlaskit/button';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
import CrossIcon from '@atlaskit/icon/glyph/cross'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &,
    &:hover {
        ${(p) => p.isCompleted && css`
            text-decoration: line-through;
        `} 
    }

    &:hover {
        .check-icon,
        .cross-icon {
            display: inline-block;
        }
    }

    .check-icon {
        display: none;
        &:hover {
            background-color: #e2e2e2;
            border-radius: 2px;
        }
    }

    .cross-icon {
        display: none;
        &:hover {
            background-color: #e2e2e2;
            border-radius: 2px;
        }
    }
`;

export default function Todo({ todo, onCheckBtnClick, onCrossBtnClick }) {
    return (
        <ButtonStyled 
            isCompleted={todo.isCompleted}
            shouldFitContainer 
            iconAfter={
                <>
                    <span 
                        className="cross-icon"
                        onClick={() => onCrossBtnClick(todo.id)}>
                            <CrossIcon primaryColor="#ff0000" />
                    </span> 
                    {!todo.isCompleted && (
                        <span 
                        className="check-icon" 
                        onClick={() => onCheckBtnClick(todo.id)}>
                            <CheckIcon primaryColor='#4fff4f'/>
                        </span>
                    )}
                </>
                
                     
                       
            }
        >
            {todo.name}
        </ButtonStyled>
    )
}