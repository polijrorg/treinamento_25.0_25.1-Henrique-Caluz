import React from 'react';
import * as S from './styles';

interface Props {
    buttontext: string;
    buttoncolor: string;
    click?: () => void;
}
export const Button: React.FC<Props> = ({ buttontext, buttoncolor, click }) => {
    return (
        <S.StyledButton onClick={click} buttoncolor={buttoncolor}>
            {buttontext}
        </S.StyledButton>
    );
};
