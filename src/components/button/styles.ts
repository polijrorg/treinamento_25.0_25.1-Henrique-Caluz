import styled from 'styled-components';

interface StyledProps {
    buttoncolor?: string;
}
export const StyledButton = styled.button<StyledProps>`
    width: 24px;
    height: 24px;
    background: ${({ buttoncolor }) => buttoncolor || 'blue'};
`;
