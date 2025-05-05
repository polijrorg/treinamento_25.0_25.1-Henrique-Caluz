import styled from 'styled-components';

export const CadaOpção = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
    :hover {
        background-color: blue;
        cursor: pointer;
    }
`;
export const TextOpção = styled.p`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const ImagemDaOpção = styled.img`
    height: 24px;
    width: 24px;
`;
